import { Component, OnInit, Input } from '@angular/core';
import { DashboardState } from 'src/app/store/dashboard.reducer';
import { Store } from '@ngrx/store';
import { ChartType, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-monthly-expense-graph',
  templateUrl: './monthly-expense-graph.component.html',
  styleUrls: ['./monthly-expense-graph.component.css']
})
export class MonthlyExpenseGraphComponent implements OnInit {

  @Input() graphData: number[];
  @Input() columnLabels: string[];
  @Input() legendPosition: string;
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
   }

}
