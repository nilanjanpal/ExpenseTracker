import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UtilService } from './../../services/util.service';
import { ChartType, ChartOptions } from 'chart.js';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-monthly-expense-graph',
  templateUrl: './monthly-expense-graph.component.html',
  styleUrls: ['./monthly-expense-graph.component.css']
})
export class MonthlyExpenseGraphComponent implements OnInit, OnDestroy {

  graphData: number[] = [];
  columnLabels: string[] = [];
  monthlyExpenseDetailSubscription: Subscription;
  @Input() monthlyExpenseDetail$: Observable<{categories: string[],
                                             monthlyCategoryExpense: number[],
                                             totalMonthlyExpense: number}>;
  public chartColors = [{
    backgroundColor: []
    }];
  // @Input() legendPosition: string;
  isNoData = false;
  chartType: ChartType = 'doughnut';
  chartLegend = true;
  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      // position: 'chartArea',
      position: 'left',
      labels: {
        usePointStyle: true
      }
    }
  };


  constructor(private utilService: UtilService,
              private dashboardService: DashboardService) {}

  ngOnDestroy() {
    this.monthlyExpenseDetailSubscription.unsubscribe();
  }

  ngOnInit(): void {
    if (this.graphData.length === 0) {
      this.isNoData = true;
    }
    this.monthlyExpenseDetail$
    .pipe(take(1))
    .subscribe(
      (data) => {
        this.graphData = [... data.monthlyCategoryExpense];
        this.columnLabels = [... data.categories];
        if (this.graphData.length != 0) {
          this.isNoData = false;
        }
        this.graphData.map(
          () => {
            this.chartColors[0].backgroundColor.push(this.utilService.getRandomColor());
          }
        )
      }
    );
    this.monthlyExpenseDetailSubscription = this.dashboardService.monthlyExpenseChangeEvent
    .subscribe(
      monthlyExpenseDetail => {
        monthlyExpenseDetail
        .pipe(take(1))
        .subscribe(
          data => {
            this.graphData = [... data.monthlyCategoryExpense];
            this.columnLabels = [... data.categories];
            if (this.graphData.length != 0) {
              this.isNoData = false;
            }
            else {
              this.isNoData = true;
            }
            this.graphData.map(
              () => {
                this.chartColors[0].backgroundColor.push(this.utilService.getRandomColor());
              }
            )
          }
        );
      }
    );
   }

}
