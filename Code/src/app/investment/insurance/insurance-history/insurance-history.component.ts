import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InsuranceDetail } from '../../../model/insurance-detail';
import { InvestmentState } from '../../../store/investment.reducer';
import * as appReducer from '../../../store/app.reducer';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-insurance-history',
  templateUrl: './insurance-history.component.html',
  styleUrls: ['./insurance-history.component.css']
})
export class InsuranceHistoryComponent {

  displayedColumns: string[] = ['companyName', 'policyName','policyNumber','policyStatus','premiumAmount','purchaseDate','paymentEndDate','maturityDate','paymentFrequency'];
  dataSource$: Observable<InsuranceDetail[]>;
  panelOpenState: boolean = false;

  constructor(private store: Store<InvestmentState>) {
    this.dataSource$ = this.store.select(appReducer.getInsurance);
  }

  calReturn(purchaseDate: Date,
            paymentEndDate: Date, 
            maturityDate: Date, 
            premiumAmount: number, 
            maturityAmount: number) {
    let paymentPeriod = Math.ceil((<any>new Date(paymentEndDate) - <any>new Date(purchaseDate)) / (1000*60*60*24*30*12));
    const policyPeriod = Math.floor((<any>new Date(maturityDate) - <any>new Date(purchaseDate)) / (1000*60*60*24*30*12));
    paymentPeriod = paymentPeriod == 0 ? 1 : paymentPeriod;
    return ((((maturityAmount - (premiumAmount * paymentPeriod)) * 100)/(premiumAmount * paymentPeriod))/policyPeriod).toFixed(2);
  }

}
