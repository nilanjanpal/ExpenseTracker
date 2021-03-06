import { Action } from "@ngrx/store";
import { ExpenseHistory } from './expense.reducer';
import { ExpenseSummary } from './dashboard.reducer';

export const SET_MONTHLY_EXPENSES = 'SET_MONTHLY_EXPENSES';
export const START_MONTHLY_GRAPH_LOADING = 'START_MONTHLY_GRAPH_LOADING';
export const STOP_MONTHLY_GRAPH_LOADING = 'STOP_MONTHLY_GRAPH_LOADING';
export const START_YEARLY_GRAPH_LOADING = 'START_YEARLY_GRAPH_LOADING';
export const STOP_YEARLY_GRAPH_LOADING = 'STOP_YEARLY_GRAPH_LOADING';
export const START_SIX_MONTH_GRAPH_LOADING = 'START_SIX_MONTH_GRAPH_LOADING';
export const STOP_SIX_MONTH_GRAPH_LOADING = 'STOP_SIX_MONTH_GRAPH_LOADING';
export const SET_SIX_MONTH_EXPENSE_HISTORY = 'SET_SIX_MONTH_EXPENSE_HISTORY';

export class SetMonthlyExpenses implements Action {
    readonly type = SET_MONTHLY_EXPENSES;
    constructor(public payload: ExpenseSummary[]) {}
}

export class StartMonthlyGraphLoading implements Action {
    readonly type = START_MONTHLY_GRAPH_LOADING;
}

export class StopMonthlyGraphLoading implements Action {
    readonly type = STOP_MONTHLY_GRAPH_LOADING;
}

export class StartYearlyGraphLoading implements Action {
    readonly type = START_YEARLY_GRAPH_LOADING;
}

export class StopYearlyGraphLoading implements Action {
    readonly type = STOP_YEARLY_GRAPH_LOADING;
}

export class StartSixMonthGraphLoading implements Action {
    readonly type = START_SIX_MONTH_GRAPH_LOADING;
}

export class StopSixMonthGraphLoading implements Action {
    readonly type = STOP_SIX_MONTH_GRAPH_LOADING;
}

export class SetSixMonthExpenseHistory implements Action {
    readonly type = SET_SIX_MONTH_EXPENSE_HISTORY;
    constructor(public payload: ExpenseHistory[]) {}
}


export type DashboardActions = SetMonthlyExpenses |
                               StartMonthlyGraphLoading |
                               StopMonthlyGraphLoading |
                               StartSixMonthGraphLoading |
                               StopSixMonthGraphLoading |
                               StartYearlyGraphLoading |
                               StopYearlyGraphLoading |
                               SetSixMonthExpenseHistory;