import { Action } from '@ngrx/store';
import { Category, ExpenseHistory } from './expense.reducer';

export const SET_EXPENSES = 'SET_EXPENSES';
export const SET_EDIT_MODE_ON = 'SET_EDIT_MODE_ON';
export const SET_EDIT_MODE_OFF = 'SET_EDIT_MODE_OFF';
export const SET_EDIT_EXPENSE_ELEMENT = 'SET_EDIT_EXPENSE_ELEMENT';
export const SET_EXPENSE_LOAD_ON = 'SET_EXPENSE_LOAD_ON';
export const SET_EXPENSE_LOAD_OFF = 'SET_EXPENSE_LOAD_OFF';
export const SET_SEARCH_DATE = 'SET_SEARCH_DATE';

export class SetExpenseData implements Action {
    readonly type = SET_EXPENSES;
    constructor(public payload: ExpenseHistory[]) { }
}

export class SetEditModeOn implements Action {
    readonly type = SET_EDIT_MODE_ON;
}

export class SetEditModeOff implements Action {
    readonly type = SET_EDIT_MODE_OFF;
}

export class SetEditExpenseElement implements Action {
    readonly type = SET_EDIT_EXPENSE_ELEMENT;
    constructor(public payload: ExpenseHistory) { }
}

export class SetLoadingOn implements Action {
    readonly type = SET_EXPENSE_LOAD_ON;
}

export class SetLoadingOff implements Action {
    readonly type = SET_EXPENSE_LOAD_OFF;
}

export class SetSearchDate implements Action {
    readonly type = SET_SEARCH_DATE;
    constructor(public startDate:Date, public endDate:Date) {}
}

export type expenseAction = SetExpenseData | 
                            SetEditModeOn | 
                            SetEditModeOff | 
                            SetEditExpenseElement |
                            SetLoadingOn |
                            SetLoadingOff |
                            SetSearchDate;