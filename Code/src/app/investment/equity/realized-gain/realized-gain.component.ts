import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { RealizedGain } from 'src/app/model/equity-detail';
import { DashboardState } from 'src/app/store/dashboard.reducer';
import { InvestmentState } from 'src/app/store/investment.reducer';
import * as appReducer from './../../../store/app.reducer';
import * as investmentActions from './../../../store/investment.action';

@Component({
  selector: 'app-realized-gain',
  templateUrl: './realized-gain.component.html',
  styleUrls: ['./realized-gain.component.css']
})
export class RealizedGainComponent implements OnInit{

  realizedGain$: Observable<RealizedGain[]>;
  isRealizedGainLoading$: Observable<boolean>;

  constructor(private store: Store<InvestmentState>,
              private dashBoardStore: Store<DashboardState>) {
    this.dashBoardStore.select(appReducer.getUserId)
      .pipe(take(1))
      .subscribe(
        userId => {
          this.store.dispatch(new investmentActions.StartSetRealizedGain(userId));
        }
      );
    this.isRealizedGainLoading$ = this.store.select(appReducer.getRealizedGainLoadingStatus);
    this.realizedGain$ = this.store.select(appReducer.getRealizedGain);
  }

  ngOnInit(): void {
      
  }

}
