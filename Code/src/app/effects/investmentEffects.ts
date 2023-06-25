import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ActiveEquityHolding, EquityTransactionDetail, RealizedGain } from "../model/equity-detail";
import * as investmentActions from './../store/investment.action';

@Injectable()
export class InvestmentEffect {

    constructor(private actions$: Actions,
                private http: HttpClient) {}

    setEquity = createEffect(() => {
        return this.actions$.pipe(
            ofType(investmentActions.START_SET_EQUITY),
            switchMap(
                (equityData: investmentActions.StartSetEquity) => {
                    return this.http.get<EquityTransactionDetail[]>(environment.url+"equityDetail", {params: {"id": equityData.userId, "startDate": equityData.startDate.toDateString(), "endDate": equityData.endDate.toDateString()}})
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

    setActiveEquity = createEffect(() => {
        return this.actions$.pipe(
            ofType(investmentActions.START_SET_ACTIVE_EQUITY),
            switchMap(
                (equityData: investmentActions.StartSetActiveEquity) => {
                    return this.http.get<ActiveEquityHolding[]>(environment.url+"activeEquityDetail", {params: {"id": equityData.userId}})
                    .pipe(
                        map(
                            response => {
                                return new investmentActions.SetActiveEquityHoldings(response);
                            }
                        )
                    )
                }
            )
        )
    });

    stopActiveEquity = createEffect(() => {
        return this.actions$.pipe(
            ofType(investmentActions.SET_ACTIVE_EQUITY_HOLDINGS),
            switchMap(
                () => {
                    return of(new investmentActions.StopSetActiveEquity());
                }
            )
        )
    });

    setRealizedGain = createEffect(() => {
        return this.actions$.pipe(
            ofType(investmentActions.START_SET_REALIZED_GAIN),
            switchMap(
                (data: investmentActions.StartSetRealizedGain) => {
                    return this.http.get<RealizedGain[]>(environment.url+"realizedGain",{params: {"id": data.userId}})
                    .pipe(
                        map(
                            response => {
                                return new investmentActions.SetRealizedGain(response)
                            }
                        )
                    )
                }
            )
        )
    });

    stopRealizedGain = createEffect(() => {
        return this.actions$.pipe(
            ofType(investmentActions.SET_REALIZED_GAIN),
            switchMap(
                () => {
                    return of(new investmentActions.StopSetRealizedGain());
                }
            )
        )
    });

}