import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Observable, Subscription } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-yearly-expense-category-graph',
  templateUrl: './yearly-expense-category-graph.component.html',
  styleUrls: ['./yearly-expense-category-graph.component.css']
})
export class YearlyExpenseCategoryGraphComponent implements OnInit, OnDestroy {

  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { xAxes: [{ }], yAxes: [{}] },
  };
  @Input() sixMonthCategorySummary$: Observable<{sixMonthExpenseSummary: number[], 
                                                 categorySummary: number[],
                                                 sixMonthTotalExpense: number}>;
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartData: ChartDataSets[] = [
  {
    barPercentage: 0.9,
    data: [], label: ''
  }];
  categorySummarySubscription: Subscription;
  categorySummaryInitSubscription: Subscription;
  chartLabelSubscription: Subscription;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    const categories: string[] = [];
    const price: number[] = [];
    this.categorySummaryInitSubscription = this.sixMonthCategorySummary$
    .subscribe(
      (data) => {
        if(data.categorySummary != undefined) {
          this.barChartData[0].data = [...data.categorySummary];
          this.barChartData[0].label = 'Categories';
        }
      }
    );
    this.chartLabelSubscription = this.dashboardService.getlastSixMonths()
    .subscribe(
      (months) => this.barChartLabels = [...months]
    );
    this.categorySummarySubscription = this.dashboardService.categoryChangeEvent
    .subscribe(
      (categorySummary) => this.barChartData[0].data = [...categorySummary]
    )
  }

  ngOnDestroy() {
    this.categorySummaryInitSubscription.unsubscribe();
    this.chartLabelSubscription.unsubscribe();
    this.categorySummarySubscription.unsubscribe();
  }

}
