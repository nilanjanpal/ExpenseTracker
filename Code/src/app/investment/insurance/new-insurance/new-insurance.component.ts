import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { InsuranceDetail } from 'src/app/model/insurance-detail';
import { InvestmentService } from 'src/app/services/investment.service';

@Component({
  selector: 'app-new-insurance',
  templateUrl: './new-insurance.component.html',
  styleUrls: ['./new-insurance.component.css']
})
export class NewInsuranceComponent implements OnInit {

  @Input() newInsuranceEvent: Observable<void>;
  isAddFormActive: boolean = false;
  newInsuranceForm: FormGroup;

  constructor(private investmentService: InvestmentService) {}

  ngOnInit() {
    this.newInsuranceEvent.subscribe(
      () => {
        this.addNewInsurance();
      }
    )
  }

  addNewInsurance() {
    this.isAddFormActive = !this.isAddFormActive;
    this.newInsuranceForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      policyName: new FormControl('', Validators.required),
      policyNumber: new FormControl('', Validators.required),
      policyStatus: new FormControl('', Validators.required),
      premiumAmount: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      paymentEndDate: new FormControl('', Validators.required),
      maturityDate: new FormControl('', Validators.required),
      paymentFrequency: new FormControl('', Validators.required),
      sumAssured: new FormControl('', Validators.required),
      maturityAmount: new FormControl('', Validators.required)
    });
  }

  clearForm() {
    this.newInsuranceForm.reset();
    this.isAddFormActive = false;
  }

  onSubmit() {
    const insuranceDetail: InsuranceDetail = {
      policyNumber: this.newInsuranceForm.value.policyNumber,
      policyName: this.newInsuranceForm.value.policyName,
      companyName: this.newInsuranceForm.value.companyName,
      premiumAmount: this.newInsuranceForm.value.premiumAmount,
      purchaseDate: this.newInsuranceForm.value.purchaseDate,
      paymentEndDate: this.newInsuranceForm.value.paymentEndDate,
      maturityDate: this.newInsuranceForm.value.maturityDate,
      paymentFrequency: this.newInsuranceForm.value.paymentFrequency,
      policyStatus: this.newInsuranceForm.value.policyStatus,
      sumAssured: this.newInsuranceForm.value.sumAssured,
      maturityAmount: this.newInsuranceForm.value.maturityAmount,
      isEdited: false,
      userId: null,
      id: null
    }
    this.investmentService.saveInsurances(insuranceDetail);
    this.newInsuranceForm.reset();
    this.isAddFormActive = !this.isAddFormActive;
  }

}
