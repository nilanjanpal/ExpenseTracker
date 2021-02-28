import { Component, OnInit, Input } from '@angular/core';
import { DashboardState } from 'src/app/store/dashboard.reducer';
import { Store } from '@ngrx/store';
import { ChartType, ChartOptions } from 'chart.js';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-monthly-expense-graph',
  templateUrl: './monthly-expense-graph.component.html',
  styleUrls: ['./monthly-expense-graph.component.css']
})
export class MonthlyExpenseGraphComponent implements OnInit {

  graphData: number[] = [];
  columnLabels: string[] = [];
  @Input() monthlyExpenseDetail$: Observable<{categories: string[],
                                             monthlyCategoryExpense: number[],
                                             totalMonthlyExpense: number}>;
  // @Input() legendPosition: string;
  isNoData = false;
  chartType: ChartType = 'doughnut';
  chartLegend = true;
  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'chartArea',
    }
  };


  constructor(private store: Store<DashboardState>) {}

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
      }
    );
   }

}
