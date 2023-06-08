import { EquityDetail } from "../model/equity-detail";
import { InsuranceDetail } from "../model/insurance-detail";
import { InvestmentDetail } from "../model/investment-detail";
import * as investmentActions from "./investment.action";

export interface InvestmentState {
    insurance: InsuranceDetail[];
    ppf: InvestmentDetail[];
    nps: InvestmentDetail[];
    equity: EquityDetail;
    startEquity: boolean;
    stopEquity: boolean;
    mf: InvestmentDetail[];
}

const initialState: InvestmentState = {
    insurance: [],
    ppf: [],
    nps: [],
    equity: {activeEquities:null,transactionDetail:[]},
    startEquity: false,
    stopEquity: false,
    mf: []
}

export function InvestmentReducer(state = initialState, actions:investmentActions.InvestmentActions) {

    switch(actions.type) {
        case investmentActions.SET_INSURANCE:
            return {
                ... state,
                insurance: actions.payload
            }
        case investmentActions.START_SET_EQUITY:
            return {
                ... state,
                startEquity: true
            }
        case investmentActions.STOP_SET_EQUITY:
            return {
                ... state,
                stopEquity: true
            }
        case investmentActions.SET_EQUITY_TRANSACTION:
            const equity = {activeEquities: {...state.equity.activeEquities}, transactionDetail:[...actions.payload]}
            return {
                ... state,
                equity: {... equity}
            }
        default:
            return state;
    }

}