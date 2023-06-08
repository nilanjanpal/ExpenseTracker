import { Action } from "@ngrx/store";
import { EquityTransactionDetail } from "../model/equity-detail";
import { InsuranceDetail } from "../model/insurance-detail";

export const SET_INSURANCE = '[Investment] Set Insurance';
export const SET_PPF = '[Investment] PPF';

export const START_SET_EQUITY = '[Investment] Start Set Equity';
export const SET_EQUITY_TRANSACTION = '[Investment] Set Equity Transaction Detail';
export const STOP_SET_EQUITY = '[Investment] Stop Set Equity';

export class SetInsurance implements Action {
    readonly type = SET_INSURANCE;
    constructor(public payload: InsuranceDetail[]) {}
}

export class StartSetEquity implements Action {
    readonly type = START_SET_EQUITY;
    constructor(public payload: string) {}
}
export class SetEquityTransaction implements Action {
    readonly type = SET_EQUITY_TRANSACTION;
    constructor(public payload: EquityTransactionDetail[]) {}
}
export class StopSetEquity implements Action {
    readonly type = STOP_SET_EQUITY;
}


export type InvestmentActions = SetInsurance |
                                StartSetEquity |
                                StopSetEquity | 
                                SetEquityTransaction;