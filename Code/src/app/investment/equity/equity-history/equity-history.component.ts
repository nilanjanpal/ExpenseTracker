import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { EquityTransactionDetail } from 'src/app/model/equity-detail';
import { DashboardState } from 'src/app/store/dashboard.reducer';
import { InvestmentState } from 'src/app/store/investment.reducer';
import * as appReducer from './../../../store/app.reducer';
import * as investmentActions from './../../../store/investment.action';

@Component({
  selector: 'app-equity-history',
  templateUrl: './equity-history.component.html',
  styleUrls: ['./equity-history.component.css']
})
export class EquityHistoryComponent implements OnInit{

  equityDetail$: Observable<EquityTransactionDetail[]>;
  startDate: Date;
  endDate: Date;

  constructor(private investmentStore: Store<InvestmentState>,
              private dashboardStore: Store<DashboardState>) {
    this.equityDetail$ = this.investmentStore.select(appReducer.getTransactionDetail);
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

  ngOnInit(): void {
    this.startDate = new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1);
    this.endDate = new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0);
    this.onSearch();
  }

}
