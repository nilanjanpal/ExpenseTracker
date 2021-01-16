import { ExpenseHistory } from './expense.reducer';
import * as dashboardActions from './dashboard.action';

export interface ExpenseSummary {
    category: string;
    price: number;
}

export interface SixMonthSummary {
    month: string;
    price: number;
}

export interface SixMonthCategorySummary{
    category: string;
    expense: ExpenseSummary[];
}


export interface DashboardState {
    allExpenses: ExpenseHistory[];
    monthlyExpenses: ExpenseSummary[];
    isMonthlyGraphLoading: boolean;
    isYearlyGraphLoading: boolean;
    isSixMonthGraphLoading: boolean;
}

const initialState: DashboardState = {
    allExpenses: [],
    monthlyExpenses: [],
    isMonthlyGraphLoading: false,
    isYearlyGraphLoading: false,
    isSixMonthGraphLoading: false
}

export function DashboardReducer(state = initialState, action: dashboardActions.DashboardActions) {
    switch(action.type){
        case dashboardActions.GET_ALL_EXPENSES:
            return {
                ... state,
                allExpenses: [...action.payload]
            };
        case dashboardActions.SET_MONTHLY_EXPENSES:
            return {
                ... state,
                monthlyExpenses: [...action.payload]
            };
        case dashboardActions.START_MONTHLY_GRAPH_LOADING:
            return {
                ... state,
                isMonthlyGraphLoading: true
            }
        case dashboardActions.STOP_MONTHLY_GRAPH_LOADING:
            return {
                ... state,
                isMonthlyGraphLoading: false
            }
        case dashboardActions.START_YEARLY_GRAPH_LOADING:
            return {
                ... state,
                isYearlyGraphLoading: true
            }
        case dashboardActions.STOP_YEARLY_GRAPH_LOADING:
            return {
                ... state,
                isYearlyGraphLoading: false
            }
        case dashboardActions.START_SIX_MONTH_GRAPH_LOADING:
            return {
                ... state,
                isSixMonthGraphLoading: true
            }
        case dashboardActions.STOP_SIX_MONTH_GRAPH_LOADING:
            return {
                ... state,
                isSixMonthGraphLoading: false
            }
        default:
            return state;
    }
}