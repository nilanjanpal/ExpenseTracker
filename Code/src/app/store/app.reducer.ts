import { AuthState } from './auth.reducer';
import { ExpenseState } from './expense.reducer';
import { DashboardState } from './dashboard.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getAuthState = createFeatureSelector<AuthState>('auth');
export const getIsAuthenticated = createSelector(getAuthState, state => state.isAuthenticated);
export const getUserId = createSelector(getAuthState, state => state.userid);
export const getIsBufferOn = createSelector(getAuthState, state => state.isBufferOn);
export const getToken = createSelector(getAuthState, state => state.token);

export const getExpenseState = createFeatureSelector<ExpenseState>('expense');
export const getExpenses = createSelector(getExpenseState, state => state.expenseHistory);
export const getDisplayedColumns = createSelector(getExpenseState, state => state.displayedColumns);
export const getEditMode = createSelector(getExpenseState, state => state.isEditModeOn);
export const getEditElement = createSelector(getExpenseState, state => state.editExpense);
export const getExpenseLoading = createSelector(getExpenseState, state => state.isExpenseLoading);
export const getStartDate = createSelector(getExpenseState, state => state.searchStartDate);
export const getEndDate = createSelector(getExpenseState, state => state.searchEndDate);

export const getDashboardState = createFeatureSelector<DashboardState>('dashboard');
export const getAnnualGraphLoadingStatus = createSelector(getDashboardState, state => state.isAnnualExpenseGraphLoading);
export const getIsDataUpdateInProgress = createSelector(getDashboardState, state => state.isDataUpdateInProgress);
export const getCategoryExpenseGraphLoadingStatus = createSelector(getDashboardState, state => state.isCategoryExpenseGraphLoading);
export const getCurrentMonthExpense = createSelector(getDashboardState, state => state.currentMonthExpense);
export const getPreviousMonthExpense = createSelector(getDashboardState, state => state.previousMonthExpense);
export const getCurrentYearExpense = createSelector(getDashboardState, state => state.currentYearExpense);
export const getPreviousYearExpense = createSelector(getDashboardState, state => state.previousYearExpense);
export const getExpenseMonthonMonth = createSelector(getDashboardState, state => state.expenseMonthonMonth);
export const getExpenseYearonYear = createSelector(getDashboardState, state => state.expenseYearonYear);
export const getTrendingExpenses = createSelector(getDashboardState, state => state.trendingExpenses);
export const getCategories = createSelector(getDashboardState, state => state.categories);
export const getCategoryExpenseDetail = createSelector(getDashboardState, state => state.categoryExpenseDetail);
export const getAnnualExpenseDetail = createSelector(getDashboardState, state => state.annualExpenseDetail);