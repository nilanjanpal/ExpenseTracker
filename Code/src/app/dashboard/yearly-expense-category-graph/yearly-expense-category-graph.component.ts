import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
// import { Label } from 'ng2-charts';
// import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Observable, Subscription } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';
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
  years$: Observable<String[]>;
  // categorySummarySubscription: Subscription;
  // categorySummaryInitSubscription: Subscription;
  // chartLabelSubscription: Subscription;

  @ViewChild("chart") chart: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  series: ApexAxisChartSeries;
  categories$: Observable<Category[]>;
  
  constructor(private dashboardService: DashboardService,
              private expenseStore: Store<ExpenseState>) { 
    this.dashboardService.getAnnualExpenseDetailByCategory('Vegetables').subscribe(
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

  ngOnInit(): void {
    this.categories$ = this.expenseStore.select(appReducer.getCategory);
    this.years$ = this.dashboardService.getYears();
  }

  ngOnDestroy() {
    // this.categorySummaryInitSubscription.unsubscribe();
    // this.chartLabelSubscription.unsubscribe();
    // this.categorySummarySubscription.unsubscribe();
  }

  onCategoryChange(data) {
    this.dashboardService.getAnnualExpenseDetailByCategory(data).subscribe(
      (expenseDetail) => {
        this.monthName = [];
        this.expense = [];
        expenseDetail.map(
          (expense) => {
            this.monthName.push(expense.month);
            this.expense.push(expense.amount);
            
          }
        );
        this.series[0].data = [...this.expense];
        this.chart.updateSeries(this.series);
      }
    );
    this.years$ = this.dashboardService.getYears();
  }

  onYearChange(data) {}

}
