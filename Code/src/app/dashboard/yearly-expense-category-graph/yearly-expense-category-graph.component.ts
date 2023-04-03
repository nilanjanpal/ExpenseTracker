import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
// import { Label } from 'ng2-charts';
// import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { DashboardService } from 'src/app/services/dashboard.service';
import * as dashboardActions from './../../store/dashboard.action';
import * as appReducer from './../../store/app.reducer';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
import { Store } from '@ngrx/store';
import { Category, ExpenseState } from 'src/app/store/expense.reducer';
import { take } from 'rxjs/operators';
import { DashboardState } from 'src/app/store/dashboard.reducer';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-yearly-expense-category-graph',
  templateUrl: './yearly-expense-category-graph.component.html',
  styleUrls: ['./yearly-expense-category-graph.component.css']
})
export class YearlyExpenseCategoryGraphComponent implements OnInit, OnDestroy {

  monthName: string[] = [];
  expense: number[] = [];
  years: number[] = [];

  @ViewChild("chart") chart: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  series: ApexAxisChartSeries;
  categories: Category[];
  
  constructor(private dashboardService: DashboardService,
              private store: Store<DashboardState>) {}

  ngOnInit(): void {
    this.dashboardService.getCategories()
    .pipe(take(1))
    .subscribe(
      categories => {
        this.categories = categories;
        this.store.dispatch(new dashboardActions.SetSelectedCategory(categories[0].Name));
        this.dashboardService.getYears()
        .pipe(take(1))
        .subscribe(
          (years: number[]) => {
            this.years = [...years];
            this.dashboardService.getAnnualExpenseDetailByCategory(categories[0].Name, years[0]).subscribe(
              (expenseDetail) => {
                expenseDetail.map(
                  (expense) => {
                    this.monthName.push(expense.month);
                    this.expense.push(expense.amount);
                  }
                );
                this.series = [
                  {
                    name: "Expense",
                    data: [...this.expense]
                  }];
                this.chartOptions = {
                  chart: {
                    height: 350,
                    type: "bar"
                  },
                  plotOptions: {
                    bar: {
                      dataLabels: {
                        position: "top" // top, center, bottom
                      }
                    }
                  },
                  dataLabels: {
                    enabled: true,
                    offsetY: -20,
                    style: {
                      fontSize: "12px",
                      colors: ["#304758"]
                    }
                  },
            
                  xaxis: {
                    categories: [...this.monthName],
                    position: "top",
                    labels: {
                      offsetY: -18
                    },
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false
                    },
                    crosshairs: {
                      fill: {
                        type: "gradient",
                        gradient: {
                          colorFrom: "#D8E3F0",
                          colorTo: "#BED1E6",
                          stops: [0, 100],
                          opacityFrom: 0.4,
                          opacityTo: 0.5
                        }
                      }
                    },
                    tooltip: {
                      enabled: true,
                      offsetY: -35
                    }
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "light",
                      type: "vertical",
                      shadeIntensity: 0.25,
                      gradientToColors: undefined,
                      inverseColors: true,
                      opacityFrom: 1,
                      opacityTo: 1,
                      stops: [50, 0, 100, 100]
                    }
                  },
                  yaxis: {
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: true
                    },
                    labels: {
                      show: true
                    }
                  },
                  title: {
                    text: 'Category Analysis',
                    offsetY: -40
                  }
                };
              }
            );
          }
        )
        
      }
    )
  }

  ngOnDestroy() {}

  onCategoryChange(data) {
    this.store.dispatch(new dashboardActions.SetSelectedCategory(data));
    this.store.select(appReducer.getSelectedYear)
    .pipe(take(1))
    .subscribe(
      year => {
        this.dashboardService.getAnnualExpenseDetailByCategory(data, year).subscribe(
          expenseDetail => {
            this.monthName = [];
            this.expense = [];
            expenseDetail.map(
              expense => {
                this.monthName.push(expense.month);
                this.expense.push(expense.amount);
              }
            )
            this.series[0].data = [...this.expense];
            this.chart.updateSeries(this.series);
          }
        );
      }
    )
  }

  onYearChange(data) {
    this.store.dispatch(new dashboardActions.SetSelectedYear(data));
    this.store.select(appReducer.getSelectedCategory)
    .pipe(take(1))
    .subscribe(
      category => {
        this.dashboardService.getAnnualExpenseDetailByCategory(category, data).subscribe(
          expenseDetail => {
            this.monthName = [];
            this.expense = [];
            expenseDetail.map(
              expense => {
                this.monthName.push(expense.month);
                this.expense.push(expense.amount);
              }
            )
            this.series[0].data = [...this.expense];
            this.chart.updateSeries(this.series);
          }
        );
      }
    )
  }

}
