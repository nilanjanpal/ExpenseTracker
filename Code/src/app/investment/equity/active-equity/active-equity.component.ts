import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActiveEquityHolding } from 'src/app/model/equity-detail';
import { DashboardState } from 'src/app/store/dashboard.reducer';
import { InvestmentState } from 'src/app/store/investment.reducer';
import * as appReducer from './../../../store/app.reducer';
import * as investmentActions from './../../../store/investment.action';

@Component({
  selector: 'app-active-equity',
  templateUrl: './active-equity.component.html',
  styleUrls: ['./active-equity.component.css']
})
export class ActiveEquityComponent {

  activeEquityDetail$: Observable<ActiveEquityHolding[]>;
  activeEquityLoading$: Observable<boolean>;

  constructor(private investmentStore: Store<InvestmentState>,
              private dashboardStore: Store<DashboardState>) {

    this.dashboardStore.select(appReducer.getUserId)
    .pipe(take(1))
    .subscribe(
      userId => {
        this.investmentStore.dispatch(new investmentActions.StartSetActiveEquity(userId))
      }
    )

    this.activeEquityLoading$ = this.investmentStore.select(appReducer.getActiveEquityLoadingStatus);
    this.activeEquityDetail$ = this.investmentStore.select(appReducer.getActiveEquityHoldings);
  }

}
