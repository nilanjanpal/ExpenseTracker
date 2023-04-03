import * as dashboardActions from './dashboard.action';
import { Category, ExpenseHistory } from './expense.reducer';

export interface CategoryExpense{
    category: string;
    expense: number;
}

export interface ExpenseDetail {
    month: string;
    amount: number;
}

export interface DashboardState {
    isAnnualExpenseGraphLoading: boolean;
    isCategoryExpenseGraphLoading: boolean;
    isDataUpdateInProgress: boolean;
    currentMonthExpense: number;
    previousMonthExpense: number;
    currentYearExpense: number;
    previousYearExpense: number;
    expenseMonthonMonth: number;
    expenseYearonYear: number;
    categories: Category[];
    trendingExpenses: CategoryExpense[];
    categoryExpenseDetail: ExpenseDetail[];
    annualExpenseDetail: ExpenseDetail[];
    selectedYear: number;
    selectedCategory: string;
}

const initialState: DashboardState = {
    isAnnualExpenseGraphLoading: false,
    isCategoryExpenseGraphLoading: false,
    isDataUpdateInProgress: false,
    currentMonthExpense: 0,
    previousMonthExpense: 0,
    currentYearExpense: 0,
    previousYearExpense: 0,
    expenseMonthonMonth: 0,
    expenseYearonYear: 0,
    categories: [],
    trendingExpenses: [],
    categoryExpenseDetail: [],
    annualExpenseDetail: [],
    selectedYear: 0,
    selectedCategory: ''
}

export function DashboardReducer(state = initialState, action: dashboardActions.DashboardActions) {
    switch(action.type){
        case dashboardActions.START_ANNUAL_EXPENSE_GRAPH_LOADING:
            return {
                ... state,
                isAnnualGraphLoading: true,
                isDataUpdateInProgress: true
            }
        case dashboardActions.STOP_ANNUAL_EXPENSE_GRAPH_LOADING:
            return {
                ... state,
                isAnnualGraphLoading: false,
                isDataUpdateInProgress: false || state.isCategoryExpenseGraphLoading
            }
        case dashboardActions.START_CATEGORY_EXPENSE_GRAPH_LOADING:
            return {
                ... state,
                isCategoryExpenseGraphLoading: true,
                isDataUpdateInProgress: true
            }
        case dashboardActions.STOP_CATEGORY_EXPENSE_GRAPH_LOADING:
            return {
                ... state,
                isCategoryExpenseGraphLoading : false,
                isDataUpdateInProgress: false || state.isAnnualExpenseGraphLoading
            }
        case dashboardActions.SET_CURRENT_MONTH_EXPENSE:
            return {
                ... state,
                currentMonthExpense: action.payload
            }
        case dashboardActions.SET_PREVIOUS_MONTH_EXPENSE:
            return {
                ... state,
                previousMonthExpense: action.payload
            }
        case dashboardActions.SET_CURRENT_YEAR_EXPENSE:
            return {
                ... state,
                currentYearExpense: action.payload
            }
        case dashboardActions.SET_PREVIOUS_YEAR_EXPENSE:
            return {
                ... state,
                previousYearExpense: action.payload
            }
        case dashboardActions.SET_EXPENSE_MONTH_ON_MONTH:
            return {
                ... state,
                expenseMonthonMonth: action.payload
            }
        case dashboardActions.SET_EXPENSE_YEAR_ON_YEAR:
            return {
                ... state,
                expenseYearonYear: action.payload
            }
        case dashboardActions.SET_TRENDING_EXPENSES:
            return {
                ... state,
                trendingExpenses: [... action.payload]
            }
        case dashboardActions.SET_CATEGORIES:
            return {
                ... state,
                categories: [... action.payload]
            }
        case dashboardActions.SET_CATEGORY_EXPENSE_DETAIL:
            return {
                ... state,
                categoryExpenseDetail: [... action.payload]
            }
        case dashboardActions.SET_ANNUAL_EXPENSE_DETAIL:
            return {
                ... state,
                annualExpenseDetail: [... action.payload]
            }
        case dashboardActions.SET_SELECTED_CATEGORY:
            return {
                ... state,
                selectedCategory: action.payload
            }
        case dashboardActions.SET_SELECTED_YEAR:
            return {
                ... state,
                selectedYear: action.payload
            }
        default:
            return state;
    }
}