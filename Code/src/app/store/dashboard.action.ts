import { Action } from "@ngrx/store";
import { ExpenseHistory } from './expense.reducer';

export const SET_EXPENSE_HISTORY = 'SET_EXPENSE_HISTORY';
export const START_ANNUAL_GRAPH_LOADING = 'START_ANNUAL_GRAPH_LOADING';
export const STOP_ANNUAL_GRAPH_LOADING = 'STOP_ANNUAL_GRAPH_LOADING';
export const SET_SIX_MONTH_EXPENSE_HISTORY = 'SET_SIX_MONTH_EXPENSE_HISTORY';
export const START_ANNUAL_EXPENSE_BY_CATEGORY = 'START_ANNUAL_EXPENSE_BY_CATEGORY';
export const STOP_ANNUAL_EXPENSE_BY_CATEGORY = 'STOP_ANNUAL_EXPENSE_BY_CATEGORY';
export const START_CURRENT_MONTH_EXPENSE_CALCULATION = 'START_CURRENT_MONTH_EXPENSE_CALCULATION';
export const STOP_CURRENT_MONTH_EXPENSE_CALCULATION = 'STOP_CURRENT_MONTH_EXPENSE_CALCULATION';

export class StartCurrentMonthExpenseCalculation {
    readonly type = START_CURRENT_MONTH_EXPENSE_CALCULATION;
}

export class StopCurrentMonthExpenseCalculation {
    readonly type = STOP_CURRENT_MONTH_EXPENSE_CALCULATION;
}

export class SetExpenseHistory implements Action {
    readonly type = SET_EXPENSE_HISTORY;
    constructor(public payload: ExpenseHistory[]) {}
}

export class StartYearlyGraphLoading implements Action {
    readonly type = START_ANNUAL_GRAPH_LOADING;
}

export class StopYearlyGraphLoading implements Action {
    readonly type = STOP_ANNUAL_GRAPH_LOADING;
}

export class SetSixMonthExpenseHistory implements Action {
    readonly type = SET_SIX_MONTH_EXPENSE_HISTORY;
    constructor(public payload: ExpenseHistory[]) {}
}

export class StartAnnualExpenseByCategory implements Action {
    readonly type = START_ANNUAL_EXPENSE_BY_CATEGORY;
}

export class StopAnnualExpenseByCategory implements Action {
    readonly type = STOP_ANNUAL_EXPENSE_BY_CATEGORY;
}

export type DashboardActions = StartYearlyGraphLoading |
                               StopYearlyGraphLoading |
                               StartAnnualExpenseByCategory |
                               StopAnnualExpenseByCategory |
                               SetSixMonthExpenseHistory |
                               SetExpenseHistory |
                               StartCurrentMonthExpenseCalculation |
                               StopCurrentMonthExpenseCalculation;