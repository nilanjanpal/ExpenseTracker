import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import * as dashboardActions from './../store/dashboard.action';
import * as appReducer from './../store/app.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DashboardService } from '../services/dashboard.service';
import { categoryExpense, DashboardState } from '../store/dashboard.reducer';
import { Category, ExpenseState } from '../store/expense.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  today: number;
  currentYear = (new Date()).getFullYear();
  currentMonth$: Observable<string>;
  // monthlyGraphLoadingStatus$: Observable<boolean>;
  // annualGraphLoadingStatus$: Observable<boolean>;
  // sixMonthGraphLoadingStatus$: Observable<boolean>;
  isDataUpdateInProgress$: Observable<boolean>;
  isDataFetchComplete$: Observable<boolean>;

  annualCategoryExpenseDetail$: Observable<{expense: number, monthName: string}[]>;
  lastSixMonthExpenseDetail$: Observable<{sixMonthExpenseSummary: number[], 
                                          categorySummary: number[],
                                          sixMonthTotalExpense: number}>;
  previousMonthExpense$: Observable<number>;
  currentMonthExpense$: Observable<number>;
  currentYearExpense$: Observable<number>;
  previousYearExpense$: Observable<number>;
  trendingExpenseData$: Observable<{categoryExpense: categoryExpense[]}>;
  months: string[]; 
  lastAnnualExpense: number[];
  categories$: Observable<Category[]>;
  categorySummary$: Observable<number[]>;
  allMonths$: Observable<string[]>;

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          gridCol: 1,
          smallCard: {row: 1, col: 1},
          wideCard: {row: 1.5, col: 1}, 
          mediumCard: {row: 1, col: 1},
          rowheight: '200px'
        };
      }
      else {
        return {
          gridCol: 4,
          smallCard: {row: 1, col: 1},
          wideCard: {row: 1.5, col: 4}, 
          mediumCard: {row: 2, col: 2},
          rowheight: '200px'
        };
      }
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private dashboardService: DashboardService,
              private store: Store<DashboardState>,
              private expenseStore: Store<ExpenseState>) {}

  ngOnInit(): void {
    this.today = (new Date()).getMonth();
    this.currentMonth$ = this.dashboardService.getCurrentMonth();

    this.store.dispatch(new dashboardActions.StartYearlyGraphLoading);
    this.store.dispatch(new dashboardActions.StartCurrentMonthExpenseCalculation);

    this.isDataUpdateInProgress$ = this.store.select(appReducer.getIsDataUpdateInProgress);
    this.isDataFetchComplete$ = this.store.select(appReducer.getDataFetchStatus);

    this.currentMonthExpense$ = this.dashboardService.getCurrentMonthExpenseDetail();
    this.previousMonthExpense$ = this.dashboardService.getPreviousMonthExpenseDetail();
    this.currentYearExpense$ = this.dashboardService.getCurrentYearExpenseDetail();
    this.previousYearExpense$ = this.dashboardService.getPreviousYearExpenseDetail();
    this.dashboardService.getYearlyExpenseDetail()
    .subscribe(
      expenseDetail => {
        this.months = [...expenseDetail.months];
        this.lastAnnualExpense = [...expenseDetail.lastAnnualExpense];
        this.store.dispatch(new dashboardActions.StopYearlyGraphLoading);
      }
    );
    this.categories$ = this.expenseStore.select(appReducer.getCategory);
    this.allMonths$ = this.dashboardService.getAllMonths();
    this.trendingExpenseData$ = this.dashboardService.getTrendingExpenses();
  }

  onMonthChange(data) {
    const date = '01-' + data + '-'+ (new Date().getFullYear());
    const startDate = new Date(new Date().getFullYear(), new Date(date).getMonth(), 1);
    const endDate = new Date(new Date().getFullYear(), new Date(date).getMonth() + 1, 0);
    // const monthExpenseDetail$ = this.dashboardService.calculateExpenseDataByDate(startDate, endDate);
    // this.dashboardService.monthlyExpenseChangeEvent.next(monthExpenseDetail$);
  }

  onChange(data) {
    this.dashboardService.getCategorySummary(data);
  }
}
