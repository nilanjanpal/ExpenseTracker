import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardState } from 'src/app/store/dashboard.reducer';
import * as investmentActions from './../../store/investment.action';
import * as appReducer from './../../store/app.reducer';
import { take } from 'rxjs/operators';
import { InvestmentState } from 'src/app/store/investment.reducer';
import { EquityDetail, EquityTransactionDetail } from 'src/app/model/equity-detail';
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

  constructor(private dashboardStore: Store<DashboardState>,
              private investmentStore: Store<InvestmentState>) {
    this.equityDetail$ = this.investmentStore.select(appReducer.getTransactionDetail);
  }

  ngOnInit(): void {
    this.dashboardStore.select(appReducer.getUserId)
    .pipe(take(1))
    .subscribe(
      userId => {
        this.investmentStore.dispatch(new investmentActions.StartSetEquity(userId))
      }
    )
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
        console.log(this.transactionDetail);
      }
    )
    // this.equityDetail$ = this.investmentStore.select(appReducer.getTransactionDetail);
  }

  onProfitLoss() {
    this.activeTab = 'Profit/Loss';
  }


}
