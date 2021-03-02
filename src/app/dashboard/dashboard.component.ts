import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import * as dashboardActions from './../store/dashboard.action';
import * as appReducer from './../store/app.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DashboardService } from '../services/dashboard.service';
import { ExpenseService } from '../services/expense.service';
import { DashboardState } from '../store/dashboard.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  today: number;
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
  allMonths$: Observable<string[]>;

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
          rowheight: '200px'
        };
      }
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private dashboardService: DashboardService,
              private expenseService: ExpenseService,
              private store: Store<DashboardState>) {}

  ngOnInit(): void {
    this.today = (new Date()).getMonth();
    this.store.dispatch(new dashboardActions.StartMonthlyGraphLoading);
    this.store.dispatch(new dashboardActions.StartSixMonthGraphLoading);
    this.store.dispatch(new dashboardActions.StartYearlyGraphLoading);
    this.monthlyGraphLoadingStatus$ = this.store.select(appReducer.getMonthlyGraphLoadingStatus);
    this.yearlyGraphLoadingStatus$ = this.store.select(appReducer.getYearlyGraphLoadingStatus);
    this.sixMonthGraphLoadingStatus$ = this.store.select(appReducer.getSixMonthGraphLoadingStatus);
    this.previousMonthTotalExpense$ = this.dashboardService.getPreviousMonthTotalExpense();
    this.lastSixMonthExpenseDetail$ = this.dashboardService.getLastSixMonthExpenseDetail();
    this.currentMonthExpenseDetail$ = this.dashboardService.getCurrentMonthExpenseDetail();
    this.categories$ = this.dashboardService.getCategories();
    this.allMonths$ = this.dashboardService.getAllMonths();
  }

  onMonthChange(data) {
    const date = '01-' + data + '-'+ (new Date().getFullYear());
    const startDate = new Date(new Date().getFullYear(), new Date(date).getMonth(), 1);
    const endDate = new Date(new Date().getFullYear(), new Date(date).getMonth() + 1, 0);
    const monthExpenseDetail$ = this.dashboardService.getMonthlyExpenseDetail(startDate, endDate);
    this.dashboardService.monthlyExpenseChangeEvent.next(monthExpenseDetail$);
  }

  onChange(data) {
    this.dashboardService.getCategorySummary(data);
  }
}
