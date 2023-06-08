import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { take } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { InsuranceDetail } from "../model/insurance-detail";
import { DashboardState } from "../store/dashboard.reducer";
import { InvestmentState } from "../store/investment.reducer";
import * as investmentActions from "./../store/investment.action";
import * as appReducer from './../store/app.reducer';
import { ToastrService } from "ngx-toastr";
import { EquityTransactionDetail } from "../model/equity-detail";

@Injectable({
    providedIn: 'root'
})
export class InvestmentService {

    constructor(private http: HttpClient,
        private store: Store<InvestmentState>,
        private dashboardStore: Store<DashboardState>,
        private toastr: ToastrService) {}

    setInsurances(): void {
        this.dashboardStore.select(appReducer.getUserId)
        .pipe(take(1))
        .subscribe(
            (userId) => {
                this.http.get<InsuranceDetail[]>(environment.url+"insurancedetail", {params:{"id":userId}})
                .pipe(take(1))
                .subscribe(
                    data => {
                        this.store.dispatch(new investmentActions.SetInsurance(data));
                    }
                );
            }
        )
    }

    saveInsurances(insuranceDetail: InsuranceDetail): void {
        this.dashboardStore.select(appReducer.getUserId)
        .pipe(take(1))
        .subscribe(
            (userId) => {
                insuranceDetail.userId = userId;
                this.http.post<void>(environment.url+"insurancedetail", insuranceDetail)
                .pipe(take(1))
                .subscribe(()=> {
                    this.setInsurances();
                    this.toastr.success('Success', 'Insurance record added successfully');
                });
            }
        )
    }

    setEquity() {
        this.dashboardStore.select(appReducer.getUserId)
        .pipe(take(1))
        .subscribe(
            (userId) => {
                return this.http.get<EquityTransactionDetail>(environment.url+"equityDetail", {params: {"id": userId}});
            }
        )
    }

    saveEquity(equityDetail: EquityTransactionDetail) {
        this.dashboardStore.select(appReducer.getUserId)
        .pipe(take(1))
        .subscribe(
            (userId) => {
                equityDetail.userId = userId;
                this.http.post<void>(environment.url+"equityDetail",equityDetail)
                .subscribe(
                    () => {
                        this.toastr.success('Success', 'Equity transaction added successfully');
                        this.store.dispatch(new investmentActions.StartSetEquity(userId))
                    }
                );
            }
        )
    }
}