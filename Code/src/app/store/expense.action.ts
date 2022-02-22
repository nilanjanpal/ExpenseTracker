import { Action } from '@ngrx/store';
import { Category, ExpenseHistory } from './expense.reducer';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SET_EXPENSES = 'SET_EXPENSES';
export const SET_EDIT_MODE_ON = 'SET_EDIT_MODE_ON';
export const SET_EDIT_MODE_OFF = 'SET_EDIT_MODE_OFF';
export const SET_EDIT_EXPENSE_ELEMENT = 'SET_EDIT_EXPENSE_ELEMENT';
export const SET_EXPENSE_LOAD_ON = 'SET_EXPENSE_LOAD_ON';
export const SET_EXPENSE_LOAD_OFF = 'SET_EXPENSE_LOAD_OFF';

export class FetchCategories implements Action {
    readonly type = FETCH_CATEGORIES;
    constructor(public payload: Category[]) { }
}

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

export type expenseAction = FetchCategories | 
                            SetExpenseData | 
                            SetEditModeOn | 
                            SetEditModeOff | 
                            SetEditExpenseElement |
                            SetLoadingOn |
                            SetLoadingOff;