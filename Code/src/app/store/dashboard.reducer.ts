import * as dashboardActions from './dashboard.action';
import { ExpenseHistory } from './expense.reducer';

export interface categoryExpense{
    category: string;
    expense: number;
}

export interface AnnualSummary {
    month: string;
    amount: number;
}

export interface DashboardState {
    isDataFetchComplete: boolean;
    isAnnualGraphLoading: boolean;
    isCurrentMonthExpenseCalculationInProgress: boolean;
    isDataUpdateInProgress: boolean;
    expenseHistory: ExpenseHistory[];
    sixMonthExpenseHistory: ExpenseHistory[];
    categoryExpenses: categoryExpense[]
}

const initialState: DashboardState = {
    isDataFetchComplete: false,
    isAnnualGraphLoading: false,
    isDataUpdateInProgress: false,
    isCurrentMonthExpenseCalculationInProgress: false,
    expenseHistory: [],
    sixMonthExpenseHistory: [],
    categoryExpenses: []
}

export function DashboardReducer(state = initialState, action: dashboardActions.DashboardActions) {
    switch(action.type){
        case dashboardActions.START_CURRENT_MONTH_EXPENSE_CALCULATION:
            return {
                ... state,
                isCurrentMonthExpenseCalculationInProgress: true,
                isDataUpdateInProgress: true
            }
        case dashboardActions.STOP_CURRENT_MONTH_EXPENSE_CALCULATION:
            return {
                ... state,
                isCurrentMonthExpenseCalculationInProgress: false,
                isDataUpdateInProgress: state.isAnnualGraphLoading || false
            }
        case dashboardActions.SET_EXPENSE_HISTORY:
            return {
                ... state,
                expenseHistory: [...action.payload],
                isDataFetchComplete: true
            }
        case dashboardActions.START_ANNUAL_GRAPH_LOADING:
            return {
                ... state,
                isAnnualGraphLoading: true,
                isDataUpdateInProgress: true
            }
        case dashboardActions.STOP_ANNUAL_GRAPH_LOADING:
            return {
                ... state,
                isAnnualGraphLoading: false,
                isDataUpdateInProgress: false || state.isCurrentMonthExpenseCalculationInProgress
            }
        case dashboardActions.SET_SIX_MONTH_EXPENSE_HISTORY:
            return {
                ... state,
                sixMonthExpenseHistory: [...action.payload]
            }
        default:
            return state;
    }
}