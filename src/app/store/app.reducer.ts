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
export const getMonthlyExpenses = createSelector(getDashboardState, state => state.monthlyExpenses);
export const getMonthlyGraphLoadingStatus = createSelector(getDashboardState, state => state.isMonthlyGraphLoading);
export const getYearlyGraphLoadingStatus = createSelector(getDashboardState, state => state.isYearlyGraphLoading);
export const getSixMonthGraphLoadingStatus = createSelector(getDashboardState, state => state.isSixMonthGraphLoading);
export const getSixMonthExpenseHistory = createSelector(getDashboardState, state => state.sixMonthExpenseHistory);