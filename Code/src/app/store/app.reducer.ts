import { AuthState } from './auth.reducer';
import { ExpenseState } from './expense.reducer';
import { DashboardState } from './dashboard.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getAuthState = createFeatureSelector<AuthState>('auth');
export const getIsAuthenticated = createSelector(getAuthState, state => state.isAuthenticated);
export const getUserId = createSelector(getAuthState, state => state.userid);
export const getIsBufferOn = createSelector(getAuthState, state => state.isBufferOn);

export const getExpenseState = createFeatureSelector<ExpenseState>('expense');
export const getCategory = createSelector(getExpenseState, state => state.category);
export const getExpenses = createSelector(getExpenseState, state => state.expenseHistory);
export const getDisplayedColumns = createSelector(getExpenseState, state => state.displayedColumns);
export const getEditMode = createSelector(getExpenseState, state => state.isEditModeOn);
export const getEditElement = createSelector(getExpenseState, state => state.editExpense);
export const getExpenseLoading = createSelector(getExpenseState, state => state.isExpenseLoading);

export const getDashboardState = createFeatureSelector<DashboardState>('dashboard');
export const getDataFetchStatus = createSelector(getDashboardState, state => state.isDataFetchComplete);
export const getExpenseHistory = createSelector(getDashboardState, state => state.expenseHistory);
export const getCategoryExpenses = createSelector(getDashboardState, state => state.categoryExpenses);
export const getAnnualGraphLoadingStatus = createSelector(getDashboardState, state => state.isAnnualGraphLoading);
export const getSixMonthExpenseHistory = createSelector(getDashboardState, state => state.sixMonthExpenseHistory);
export const getIsDataUpdateInProgress = createSelector(getDashboardState, state => state.isDataUpdateInProgress);