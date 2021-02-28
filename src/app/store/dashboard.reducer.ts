import * as dashboardActions from './dashboard.action';
import { ExpenseHistory } from './expense.reducer';

export interface ExpenseSummary {
    category: string;
    price: number;
}

export interface DashboardState {
    monthlyExpenses: ExpenseSummary[];
    isMonthlyGraphLoading: boolean;
    isYearlyGraphLoading: boolean;
    isSixMonthGraphLoading: boolean;
    sixMonthExpenseHistory: ExpenseHistory[];
}

const initialState: DashboardState = {
    monthlyExpenses: [],
    isMonthlyGraphLoading: false,
    isYearlyGraphLoading: false,
    isSixMonthGraphLoading: false,
    sixMonthExpenseHistory: []
}

export function DashboardReducer(state = initialState, action: dashboardActions.DashboardActions) {
    switch(action.type){
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
        case dashboardActions.SET_SIX_MONTH_EXPENSE_HISTORY:
            return {
                ... state,
                sixMonthExpenseHistory: [...action.payload]
            }
        default:
            return state;
    }
}