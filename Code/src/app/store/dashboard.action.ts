import { Action } from "@ngrx/store";
import { CategoryExpense, ExpenseDetail } from "./dashboard.reducer";
import { Category } from './expense.reducer';

export const START_ANNUAL_EXPENSE_GRAPH_LOADING = 'Dashboard START_ANNUAL_EXPENSE_GRAPH_LOADING';
export const STOP_ANNUAL_EXPENSE_GRAPH_LOADING = 'Dashboard STOP_ANNUAL_EXPENSE_GRAPH_LOADING';
export const START_CATEGORY_EXPENSE_GRAPH_LOADING = 'Dashboard START_CATEGORY_EXPENSE_GRAPH_LOADING';
export const STOP_CATEGORY_EXPENSE_GRAPH_LOADING = 'Dashboard STOP_CATEGORY_EXPENSE_GRAPH_LOADING';
export const SET_CURRENT_MONTH_EXPENSE = 'Dashboard SET_CURRENT_MONTH_EXPENSE';
export const SET_PREVIOUS_MONTH_EXPENSE = 'Dashboard SET_PREVIOUS_MONTH_EXPENSE';
export const SET_CURRENT_YEAR_EXPENSE = 'Dashboard SET_CURRENT_YEAR_EXPENSE';
export const SET_PREVIOUS_YEAR_EXPENSE = 'Dashboard SET_PREVIOUS_YEAR_EXPENSE';
export const SET_EXPENSE_MONTH_ON_MONTH = 'Dashboard SET_EXPENSE_MONTH_ON_MONTH';
export const SET_EXPENSE_YEAR_ON_YEAR = 'Dashboard SET_EXPENSE_YEAR_ON_YEAR';
export const SET_CATEGORIES = 'Dashboard SET_CATEGORIES';
export const SET_TRENDING_EXPENSES = 'Dashboard SET_TRENDING_EXPENSES';
export const SET_CATEGORY_EXPENSE_DETAIL = 'Dashboard SET_CATEGORY_EXPENSE_DETAIL';
export const SET_ANNUAL_EXPENSE_DETAIL = 'Dashboard SET_ANNUAL_EXPENSE_DETAIL';
export const SET_SELECTED_YEAR = 'Dashboard SET_SELECTED_YEAR';
export const SET_SELECTED_CATEGORY = 'Dashboard SET_SELECTED_CATEGORY';

export class StartAnnualExpenseGraphLoading implements Action {
    readonly type = START_ANNUAL_EXPENSE_GRAPH_LOADING;
}

export class StopAnnualExpenseGraphLoading implements Action {
    readonly type = STOP_ANNUAL_EXPENSE_GRAPH_LOADING;
}

export class StartCategoryExpenseGraphLoading implements Action {
    readonly type = START_CATEGORY_EXPENSE_GRAPH_LOADING;
}

export class StopCategoryExpenseGraphLoading implements Action {
    readonly type = STOP_CATEGORY_EXPENSE_GRAPH_LOADING;
}

export class SetCurrentMonthExpense implements Action {
    readonly type = SET_CURRENT_MONTH_EXPENSE;
    constructor(public payload: number) {}
}

export class SetPreviousMonthExpense implements Action {
    readonly type = SET_PREVIOUS_MONTH_EXPENSE;
    constructor(public payload: number) {}
}

export class SetCurrentYearExpense implements Action {
    readonly type = SET_CURRENT_YEAR_EXPENSE;
    constructor(public payload: number) {}
}

export class SetPreviousYearExpense implements Action {
    readonly type = SET_PREVIOUS_YEAR_EXPENSE;
    constructor(public payload: number) {}
}

export class SetExpenseMonthonMonth implements Action {
    readonly type = SET_EXPENSE_MONTH_ON_MONTH;
    constructor(public payload: number) {}
}

export class SetExpenseYearonYear implements Action {
    readonly type = SET_EXPENSE_YEAR_ON_YEAR;
    constructor(public payload: number) {}
}

export class SetCategories implements Action {
    readonly type = SET_CATEGORIES;
    constructor(public payload: Category[]) {}
}

export class SetTrendingExpenses implements Action {
    readonly type = SET_TRENDING_EXPENSES;
    constructor(public payload: CategoryExpense[]) {}
}

export class SetCategoryExpenseDetail implements Action {
    readonly type = SET_CATEGORY_EXPENSE_DETAIL;
    constructor(public payload: ExpenseDetail[]) {}
}

export class SetAnnualExpenseDetail implements Action {
    readonly type = SET_ANNUAL_EXPENSE_DETAIL;
    constructor(public payload: ExpenseDetail[]) {}
}

export class SetSelectedYear implements Action {
    readonly type = SET_SELECTED_YEAR;
    constructor(public payload: number) {}
}

export class SetSelectedCategory implements Action {
    readonly type = SET_SELECTED_CATEGORY;
    constructor(public payload: string) {}
}

export type DashboardActions = StartAnnualExpenseGraphLoading |
                               StopAnnualExpenseGraphLoading |
                               StartCategoryExpenseGraphLoading |
                               StopCategoryExpenseGraphLoading |
                               SetCurrentMonthExpense |
                               SetPreviousMonthExpense |
                               SetCurrentYearExpense |
                               SetPreviousYearExpense |
                               SetExpenseMonthonMonth |
                               SetExpenseYearonYear |
                               SetCategories |
                               SetTrendingExpenses |
                               SetCategoryExpenseDetail |
                               SetAnnualExpenseDetail |
                               SetSelectedCategory |
                               SetSelectedYear;