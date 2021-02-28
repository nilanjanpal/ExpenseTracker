import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import * as dashboardActions from './../store/dashboard.action';
import * as appReducer from './../store/app.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DashboardService } from '../services/dashboard.service';
import { ExpenseService } from '../services/expense.service';
import { DashboardState, ExpenseSummary } from '../store/dashboard.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  monthlyGraphLoadingStatus$: Observable<boolean>;
  yearlyGraphLoadingStatus$: Observable<boolean>;
  sixMonthGraphLoadingStatus$: Observable<boolean>;
  lastSixMonthExpenseDetail$: Observable<{sixMonthExpenseSummary: number[], 
                                          categorySummary: number[],
                                          sixMonthTotalExpense: number}>;
  previousMonthTotalExpense$: Observable<number>;
  currentMonthExpenseDetail$: Observable<{categories: string[],
                                          monthlyCategoryExpense: number[],
                                          totalMonthlyExpense: number}>;
  categories$: Observable<string[]>;
  categorySummary$: Observable<number[]>;

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          gridCol: 1,
          smallCard: {row: 1, col: 1},
          wideCard: {row: 1, col: 1},
          rowheight: '250px'
        };
      }
      else {
        return {
          gridCol: 4,
          smallCard: {row: 1, col: 1},
          wideCard: {row: 2, col: 2},
          medCard: {row: 1.5, col: 1.5},
          rowheight: '180px'
        };
      }
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private dashboardService: DashboardService,
              private expenseService: ExpenseService,
              private store: Store<DashboardState>) {}

  ngOnInit(): void {
    this.store.dispatch(new dashboardActions.StartMonthlyGraphLoading);
    this.store.dispatch(new dashboardActions.StartSixMonthGraphLoading);
    this.store.dispatch(new dashboardActions.StartYearlyGraphLoading);
    this.monthlyGraphLoadingStatus$ = this.store.select(appReducer.getMonthlyGraphLoadingStatus);
    this.yearlyGraphLoadingStatus$ = this.store.select(appReducer.getYearlyGraphLoadingStatus);
    this.sixMonthGraphLoadingStatus$ = this.store.select(appReducer.getSixMonthGraphLoadingStatus);
    this.previousMonthTotalExpense$ = this.dashboardService.getPreviousMonthTotalExpense();
    this.currentMonthExpenseDetail$ = this.dashboardService.getCurrentMonthExpenseDetail();
    this.lastSixMonthExpenseDetail$ = this.dashboardService.getLastSixMonthExpenseDetail();
    this.categories$ = this.dashboardService.getCategories();
  }

  onChange(data) {
    this.dashboardService.getCategorySummary(data);
  }
}
