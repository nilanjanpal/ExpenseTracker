import { Action } from "@ngrx/store";
import { ExpenseHistory } from './expense.reducer';
import { ExpenseSummary } from './dashboard.reducer';

export const GET_ALL_EXPENSES = 'GET_ALL_EXPENSES';
export const SET_MONTHLY_EXPENSES = 'SET_MONTHLY_EXPENSES';
export const START_MONTHLY_GRAPH_LOADING = 'START_MONTHLY_GRAPH_LOADING';
export const STOP_MONTHLY_GRAPH_LOADING = 'STOP_MONTHLY_GRAPH_LOADING';
export const START_YEARLY_GRAPH_LOADING = 'START_YEARLY_GRAPH_LOADING';
export const STOP_YEARLY_GRAPH_LOADING = 'STOP_YEARLY_GRAPH_LOADING';
export const START_SIX_MONTH_GRAPH_LOADING = 'START_SIX_MONTH_GRAPH_LOADING';
export const STOP_SIX_MONTH_GRAPH_LOADING = 'STOP_SIX_MONTH_GRAPH_LOADING';

export class GetAllExpenses implements Action {
    readonly type = GET_ALL_EXPENSES;
    constructor(public payload: ExpenseHistory[]) {}
}

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


export type DashboardActions = GetAllExpenses | 
                               SetMonthlyExpenses |
                               StartMonthlyGraphLoading |
                               StopMonthlyGraphLoading |
                               StartSixMonthGraphLoading |
                               StopSixMonthGraphLoading |
                               StartYearlyGraphLoading |
                               StopYearlyGraphLoading;