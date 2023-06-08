import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { EquityTransactionDetail } from "../model/equity-detail";
import * as investmentActions from './../store/investment.action';

@Injectable()
export class InvestmentEffect {

    constructor(private actions$: Actions,
                private http: HttpClient) {}

    setEquity = createEffect(() => {
        return this.actions$.pipe(
            ofType(investmentActions.START_SET_EQUITY),
            switchMap(
                (userId) => {
                    return this.http.get<EquityTransactionDetail[]>(environment.url+"equityDetail", {params: {"id": userId}})
                    .pipe(
                        map(
                            response => {
                                return new investmentActions.SetEquityTransaction(response);
                            }
                        )
                    )
                }
            )
        )
    });

    stopEquity = createEffect(() => {
        return this.actions$.pipe(
            ofType(investmentActions.SET_EQUITY_TRANSACTION),
            switchMap(
                () => {
                    return of(new investmentActions.StopSetEquity());
                }
            )
        )
    });

}