import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import * as dashboardActions from './../store/dashboard.action';
import * as appReducer from './../store/app.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DashboardService } from '../services/dashboard.service';
import { CategoryExpense, DashboardState } from '../store/dashboard.reducer';
import { Category, ExpenseState } from '../store/expense.reducer';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  today: number;
  currentYear = (new Date()).getFullYear();
  currentMonth$: Observable<string>;
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
  percentageIncreaseMom$: Observable<number>;
  percentageIncreaseYoy$: Observable<number>;
  trendingExpenseData$: Observable<CategoryExpense[]>;
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
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('money',this.sanitizer.bypassSecurityTrustResourceUrl('/assets/rupee-svgrepo-com.svg'));
    this.iconRegistry.addSvgIcon('graph',this.sanitizer.bypassSecurityTrustResourceUrl('/assets/line-graph-part-2-svgrepo-com.svg'));
  }

  ngOnInit(): void {
    this.today = (new Date()).getMonth();
    this.currentMonth$ = this.dashboardService.getCurrentMonth();

    // this.store.dispatch(new dashboardActions.StartAnnualExpenseGraphLoading);
    // this.store.dispatch(new dashboardActions.StartCategoryExpenseGraphLoading);

    this.isDataUpdateInProgress$ = this.store.select(appReducer.getIsDataUpdateInProgress);

    this.allMonths$ = this.dashboardService.getAllMonths();
    // this.trendingExpenseData$ = this.dashboardService.getTrendingExpenses();
  }

  ngAfterViewInit() {

    this.currentMonthExpense$ = this.store.select(appReducer.getCurrentMonthExpense);
    this.previousMonthExpense$ = this.store.select(appReducer.getPreviousMonthExpense);
    this.currentYearExpense$ = this.store.select(appReducer.getCurrentYearExpense);
    this.previousYearExpense$ = this.store.select(appReducer.getPreviousYearExpense);
    this.previousMonthExpense$ = this.store.select(appReducer.getPreviousMonthExpense);
    this.percentageIncreaseMom$ = this.store.select(appReducer.getExpenseMonthonMonth);
    this.percentageIncreaseYoy$ = this.store.select(appReducer.getExpenseYearonYear);
    this.trendingExpenseData$ = this.store.select(appReducer.getTrendingExpenses);
    this.categories$ = this.store.select(appReducer.getCategories);


    this.currentMonthExpense$.subscribe(
      data => console.log(data)
    )
  }

  onMonthChange(data) {
    const date = '01-' + data + '-'+ (new Date().getFullYear());
    const startDate = new Date(new Date().getFullYear(), new Date(date).getMonth(), 1);
    const endDate = new Date(new Date().getFullYear(), new Date(date).getMonth() + 1, 0);
    // const monthExpenseDetail$ = this.dashboardService.calculateExpenseDataByDate(startDate, endDate);
    // this.dashboardService.monthlyExpenseChangeEvent.next(monthExpenseDetail$);
  }

  onChange(data) {
    // this.dashboardService.getCategorySummary(data);
  }
}
