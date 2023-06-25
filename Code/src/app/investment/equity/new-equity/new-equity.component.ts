import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { EquityTransactionDetail } from 'src/app/model/equity-detail';
import { InvestmentService } from 'src/app/services/investment.service';
import { InvestmentState } from 'src/app/store/investment.reducer';
import { environment } from 'src/environments/environment';
import * as appReducer from './../../../store/app.reducer';

@Component({
  selector: 'app-new-equity',
  templateUrl: './new-equity.component.html',
  styleUrls: ['./new-equity.component.css']
})
export class NewEquityComponent implements OnInit{

  @Input() newEquityEvent: Observable<void>;
  equityForm: FormGroup;
  transactionType: string[] = ['Buy', 'Sell'];
  isNewEquityActive: boolean = false;

  constructor(private investmentService: InvestmentService,
              private http: HttpClient,
              private store: Store<InvestmentState>) {}

  ngOnInit() {
    this.newEquityEvent.subscribe(
      () => {
        this.addNewEquity();
      }
    )
  }

  addNewEquity() {
    this.isNewEquityActive = true;
    this.equityForm = new FormGroup({
      stockName: new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required),
      pricePerStock: new FormControl('',Validators.required),
      brokerageAndOtherCharges: new FormControl('',Validators.required),
      transactionType: new FormControl('', Validators.required),
      transactionDate: new FormControl('', Validators.required),
      symbol: new FormControl('', Validators.required),
      exchange: new FormControl('', Validators.required)
    })
  }

  reset() {
    this.isNewEquityActive = false;
    this.equityForm.reset();
  }

  saveEquity() {
    const equityDetail: EquityTransactionDetail = {
      stockName: this.equityForm.value.stockName,
      quantity: this.equityForm.value.quantity,
      pricePerStock: this.equityForm.value.pricePerStock,
      brokerageAndOtherCharges: this.equityForm.value.brokerageAndOtherCharges,
      transactionDate: this.equityForm.value.transactionDate,
      transactionType: this.equityForm.value.transactionType,
      symbol: this.equityForm.value.symbol,
      userId: '',
      exchange: this.equityForm.value.exchange,
      id: null
    }
    this.investmentService.saveEquity(equityDetail);
    this.isNewEquityActive = false;
    this.equityForm.reset();
  }

  onSymbolChange() {
    this.store.select(appReducer.getUserId)
    .pipe(take(1))
    .subscribe(
      userId => {
        console.log({params:{"id":userId,"symbol":this.equityForm.value.symbol}});
        this.http.get(environment.url+"stockname",{responseType:'text', params:{"symbol":this.equityForm.value.symbol}})
        .subscribe(
          data => {
            this.equityForm.patchValue({stockName: data});
          }
        )
      }
    )
  }

}
