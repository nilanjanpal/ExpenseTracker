import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Observable, Subscription } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-yearly-expense-graph',
  templateUrl: './yearly-expense-graph.component.html',
  styleUrls: ['./yearly-expense-graph.component.css']
})
export class YearlyExpenseGraphComponent implements OnInit, OnDestroy {
  
  @Input() chartData$: Observable<{sixMonthExpenseSummary: number[], sixMonthTotalExpense: number}>;;
  lineChartLabels$: Observable<string>;
  labelSubscription: Subscription;
  chartDataSubscription: Subscription;
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Expenses' }
  ];
  lineChartLabels: Label[] = [];
  lineChartLegend = false;
  lineChartType = 'line';
  lineChartOptions : ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  }
  lineChartColors: Color[] = [
    { 
      borderColor: 'rgba(245,146,37,1)',
      backgroundColor: 'rgba(245,146,37,1)'
    }
  ];
  lineChartPlugins = [];

  constructor(private dashboardService: DashboardService) { }
  
  ngOnInit(): void {
    this.labelSubscription = this.dashboardService.getlastSixMonths()
    .subscribe(
      labels => {
        this.lineChartLabels = [...labels]
      }
    );
    this.chartDataSubscription = this.chartData$
    .subscribe(
      (data) => {
        this.lineChartData.map(
          linechart => {
            linechart.data = [...data.sixMonthExpenseSummary];
          }
        )
      }
    );
  }

  ngOnDestroy(): void {
    this.labelSubscription.unsubscribe();
    this.chartDataSubscription.unsubscribe();
  }


}
