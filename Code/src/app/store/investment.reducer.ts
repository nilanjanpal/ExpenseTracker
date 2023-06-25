import { EquityDetail } from "../model/equity-detail";
import { InsuranceDetail } from "../model/insurance-detail";
import { InvestmentDetail } from "../model/investment-detail";
import * as investmentActions from "./investment.action";

export interface InvestmentState {
    insurance: InsuranceDetail[];
    ppf: InvestmentDetail[];
    nps: InvestmentDetail[];
    equity: EquityDetail;
    activeEquityHoldingLoading: boolean;
    startSetEquityTransaction: boolean;
    stopSetEquityTransaction: boolean;
    realizedGainLoading: boolean;
    mf: InvestmentDetail[];
}

const initialState: InvestmentState = {
    insurance: [],
    ppf: [],
    nps: [],
    equity: {activeEquities:[],transactionDetail:[], realizedGain:[]},
    startSetEquityTransaction: false,
    stopSetEquityTransaction: false,
    activeEquityHoldingLoading: true,
    realizedGainLoading: false,
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
                startEquityTransaction: true
            }
        case investmentActions.STOP_SET_EQUITY:
            return {
                ... state,
                stopSetEquityTransaction: true
            }
        case investmentActions.SET_EQUITY_TRANSACTION:
            const equity = {activeEquities: [...state.equity.activeEquities], transactionDetail:[...actions.payload], realizedGain: [...state.equity.realizedGain]}
            return {
                ... state,
                equity: {... equity}
            }
        case investmentActions.START_SET_ACTIVE_EQUITY:
            return {
                ... state,
                activeEquityHoldingLoading: true
            }
        case investmentActions.STOP_SET_ACTIVE_EQUITY:
            return {
                ... state,
                activeEquityHoldingLoading: false
            }
        case investmentActions.SET_ACTIVE_EQUITY_HOLDINGS:
            const equityItem = {activeEquities: [...actions.payload], transactionDetail:[...state.equity.transactionDetail], realizedGain: [...state.equity.realizedGain]};
            return {
                ... state,
                equity: {...equityItem}
            }
        case investmentActions.START_SET_REALIZED_GAIN:
            return {
                ... state,
                realizedGainLoading: true
            }
        case investmentActions.SET_REALIZED_GAIN:
            const item = {activeEquities: [...state.equity.activeEquities], transactionDetail:[...state.equity.transactionDetail], realizedGain: [...actions.payload]};
            return {
                ... state,
                equity: {... item}
            }
        case investmentActions.STOP_SET_REALIZED_GAIN:
            return {
                ... state,
                realizedGainLoading: false
            }
        default:
            return state;
    }

}