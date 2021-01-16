import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-yearly-expense-graph',
  templateUrl: './yearly-expense-graph.component.html',
  styleUrls: ['./yearly-expense-graph.component.css']
})
export class YearlyExpenseGraphComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Expenses' }
  ];
  @Input() chartData: number[];
  @Input() lineChartLabels: Label[] = [];
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

  constructor() { }

  ngOnInit(): void {
    this.lineChartData.map(
      linechart => {
        linechart.data = [...this.chartData];
      }
    )
  }

}
