import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardState } from 'src/app/store/dashboard.reducer';
import * as investmentActions from './../../store/investment.action';
import * as appReducer from './../../store/app.reducer';
import { take } from 'rxjs/operators';
import { InvestmentState } from 'src/app/store/investment.reducer';
import { ActiveEquityHolding, EquityDetail, EquityTransactionDetail } from 'src/app/model/equity-detail';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equity',
  templateUrl: './equity.component.html',
  styleUrls: ['./equity.component.css']
})
export class EquityComponent implements OnInit{

  panelOpenState = false;
  activeTab = 'Active';
  transactionDetail: EquityTransactionDetail[] = [];
  equityDetail$: Observable<EquityTransactionDetail[]>;
  activeEquityDetail$: Observable<ActiveEquityHolding[]>;
  activeEquityLoading$: Observable<boolean>;
  startDate: Date;
  endDate: Date;

  constructor(private dashboardStore: Store<DashboardState>,
              private investmentStore: Store<InvestmentState>) {
    this.getActiveEquityHoldings();
    this.activeEquityLoading$ = this.investmentStore.select(appReducer.getActiveEquityLoadingStatus);
    this.equityDetail$ = this.investmentStore.select(appReducer.getTransactionDetail);
    this.activeEquityDetail$ = this.investmentStore.select(appReducer.getActiveEquityHoldings);
  }

  ngOnInit(): void {
    this.startDate = new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1);
    this.endDate = new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0);
    this.onSearch();
  }

  onActive() {
    this.activeTab = 'Active';
  }

  onTransactionHistory() {
    this.activeTab = 'Transaction History';
    this.investmentStore.select(appReducer.getEquity)
    .subscribe(
      data => {
        this.transactionDetail = [...data.transactionDetail];
      }
    )
    // this.equityDetail$ = this.investmentStore.select(appReducer.getTransactionDetail);
  }

  getActiveEquityHoldings() {
    this.dashboardStore.select(appReducer.getUserId)
    .pipe(take(1))
    .subscribe(
      userId => {
        this.investmentStore.dispatch(new investmentActions.StartSetActiveEquity(userId))
      }
    )
  }

  onSearch() {
    this.dashboardStore.select(appReducer.getUserId)
    .pipe(take(1))
    .subscribe(
      userId => {
        this.investmentStore.dispatch(new investmentActions.StartSetEquity(userId, this.startDate, this.endDate))
      }
    )
  }

  onProfitLoss() {
    this.activeTab = 'Profit/Loss';
  }


}
