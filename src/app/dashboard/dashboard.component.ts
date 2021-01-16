import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import * as dashboardActions from './../store/dashboard.action';
import * as appReducer from './../store/app.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DashboardService } from '../services/dashboard.service';
import { ExpenseService } from '../services/expense.service';
import { DashboardState, ExpenseSummary, SixMonthSummary, SixMonthCategorySummary } from '../store/dashboard.reducer';
import { ExpenseState } from '../store/expense.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  monthlySummaryChartData: number[] = [];
  monthlySummaryChartColumnLabels: string[] = [];
  lastSixMonthChartData: number[] = [];
  lastSixMonthChartColumnLabels: string[] = [];
  monthlyGraphLoadingStatus$: Observable<boolean>;
  yearlyGraphLoadingStatus$: Observable<boolean>;
  sixMonthGraphLoadingStatus$: Observable<boolean>;
  lastSixMonthTotalExpense = 0;
  currentMonthTotalExpense = 0;
  percentageChange = 0;
  sixMonthSummary: SixMonthCategorySummary[] = [];

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
          rowheight: '200px'
        };
      }
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private dashboardService: DashboardService,
              private expenseService: ExpenseService,
              private store: Store<DashboardState>,
              private expenseStore: Store<ExpenseState>) {}

  ngOnInit(): void {
    this.store.dispatch(new dashboardActions.StartMonthlyGraphLoading);
    this.store.dispatch(new dashboardActions.StartSixMonthGraphLoading);
    this.store.dispatch(new dashboardActions.StartYearlyGraphLoading);
    this.monthlyGraphLoadingStatus$ = this.store.select(appReducer.getMonthlyGraphLoadingStatus);
    this.yearlyGraphLoadingStatus$ = this.store.select(appReducer.getYearlyGraphLoadingStatus);
    this.sixMonthGraphLoadingStatus$ = this.store.select(appReducer.getSixMonthGraphLoadingStatus);
    this.dashboardService.getAllExpenses().then(
      () => {
        this.expenseService.getCategories().then(
          () => {
              this.dashboardService.getCurrentMonthExpenses().then(
              (monthlyExpenses: ExpenseSummary[]) => {
                this.currentMonthTotalExpense = 0;
                monthlyExpenses.map(
                  expense => {
                    if (expense.price > 0){
                      this.monthlySummaryChartColumnLabels.push(expense.category);
                      this.monthlySummaryChartData.push(expense.price);
                      this.currentMonthTotalExpense = this.currentMonthTotalExpense + expense.price;
                    }
                  }
                );
                this.dashboardService.getPreviousMonthExpenses().then(
                  (previousMonthExpense: number) => {
                    if (previousMonthExpense === 0) {
                      this.percentageChange = 100;
                    }
                    else {
                      this.percentageChange = ((this.currentMonthTotalExpense - previousMonthExpense) / previousMonthExpense) * 100;
                    }
                  }
                );
                this.store.dispatch(new dashboardActions.StopMonthlyGraphLoading);
              }
            );
            this.dashboardService.getSixMonthCategorySummary().then(
              (sixMonthSummary: SixMonthCategorySummary[]) => {
                this.sixMonthSummary = [...sixMonthSummary];

                this.store.dispatch(new dashboardActions.StopSixMonthGraphLoading);
              }
            );
            this.dashboardService.getLastSixMonthExpense().then(
              (lastSixMonthlyExpenses: SixMonthSummary[]) => {
                this.lastSixMonthTotalExpense = 0;
                lastSixMonthlyExpenses.map(
                  expense => {
                    this.lastSixMonthChartColumnLabels.push(expense.month);
                    this.lastSixMonthChartData.push(expense.price);
                    this.lastSixMonthTotalExpense = this.lastSixMonthTotalExpense + expense.price;
                  }
                );
                this.store.dispatch(new dashboardActions.StopYearlyGraphLoading);
              }
            );
          }
        );
      }
    );
  }
}
