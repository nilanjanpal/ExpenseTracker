import { Action } from "@ngrx/store";
import { ActiveEquityHolding, EquityTransactionDetail, RealizedGain } from "../model/equity-detail";
import { InsuranceDetail } from "../model/insurance-detail";

export const SET_INSURANCE = '[Investment] Set Insurance';
export const SET_PPF = '[Investment] PPF';

export const START_SET_EQUITY = '[Investment] Start Set Equity';
export const SET_EQUITY_TRANSACTION = '[Investment] Set Equity Transaction Detail';
export const STOP_SET_EQUITY = '[Investment] Stop Set Equity';
export const START_SET_ACTIVE_EQUITY = '[Investment] Start Set Active Equity';
export const STOP_SET_ACTIVE_EQUITY = '[Investment] Stop Set Active Equity';
export const SET_ACTIVE_EQUITY_HOLDINGS = '[Investment] Set Active Equity Holdings';
export const START_SET_REALIZED_GAIN = '[Investment] Start Set Realized Gain';
export const STOP_SET_REALIZED_GAIN = '[Investment] Stop Set Realized Gain';
export const SET_REALIZED_GAIN = '[Investment] Set Realized Gain';

export class SetInsurance implements Action {
    readonly type = SET_INSURANCE;
    constructor(public payload: InsuranceDetail[]) {}
}

export class StartSetEquity implements Action {
    readonly type = START_SET_EQUITY;
    constructor(public userId: string, public startDate: Date, public endDate: Date) {}
}
export class SetEquityTransaction implements Action {
    readonly type = SET_EQUITY_TRANSACTION;
    constructor(public payload: EquityTransactionDetail[]) {}
}
export class StopSetEquity implements Action {
    readonly type = STOP_SET_EQUITY;
}

export class StartSetActiveEquity implements Action {
    readonly type= START_SET_ACTIVE_EQUITY;
    constructor(public userId: string) {}
}

export class SetActiveEquityHoldings implements Action {
    readonly type = SET_ACTIVE_EQUITY_HOLDINGS;
    constructor(public payload: ActiveEquityHolding[]) {}
}

export class StopSetActiveEquity implements Action {
    readonly type = STOP_SET_ACTIVE_EQUITY;
}

export class StartSetRealizedGain implements Action {
    readonly type = START_SET_REALIZED_GAIN;
    constructor(public userId: string) {}
}

export class SetRealizedGain implements Action {
    readonly type = SET_REALIZED_GAIN;
    constructor(public payload: RealizedGain[]) {}
}

export class StopSetRealizedGain implements Action {
    readonly type = STOP_SET_REALIZED_GAIN;
}

export type InvestmentActions = SetInsurance |
                                StartSetEquity |
                                StopSetEquity | 
                                SetEquityTransaction |
                                StartSetActiveEquity |
                                StopSetActiveEquity |
                                SetActiveEquityHoldings |
                                StartSetRealizedGain |
                                StopSetRealizedGain |
                                SetRealizedGain;