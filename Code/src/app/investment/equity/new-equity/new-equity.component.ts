import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EquityTransactionDetail } from 'src/app/model/equity-detail';
import { InvestmentService } from 'src/app/services/investment.service';

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

  constructor(private investmentService: InvestmentService) {}

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
      transactionDate: new FormControl('', Validators.required)
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
      userId: '',
      id: null
    }
    this.investmentService.saveEquity(equityDetail);
    this.isNewEquityActive = false;
    this.equityForm.reset();
  }

}
