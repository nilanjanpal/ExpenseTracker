import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { SixMonthSummary, SixMonthCategorySummary } from 'src/app/store/dashboard.reducer';

@Component({
  selector: 'app-yearly-expense-category-graph',
  templateUrl: './yearly-expense-category-graph.component.html',
  styleUrls: ['./yearly-expense-category-graph.component.css']
})
export class YearlyExpenseCategoryGraphComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { xAxes: [{ }], yAxes: [{}] },
  };
  @Input() barChartLabels: Label[] = [];
  @Input() sixMonthSummary: SixMonthCategorySummary[];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartData: ChartDataSets[] = [
    {
      barPercentage: 0.9,
      data: [], label: ''
    },
    {
      barPercentage: 0.9,
      data: [], label: ''
    },
    {
      barPercentage: 0.9,
      data: [], label: ''
    },
    {
      barPercentage: 0.9,
      data: [], label: ''
    },
    {
      barPercentage: 0.9,
      data: [], label: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
    let index = 0 ;
    if (this.barChartData !== undefined) {
      this.barChartData.map(
        chart => {
          chart.label = this.sixMonthSummary[index].category;
          this.sixMonthSummary[index].expense.map(
            expense => this.barChartData[index].data.push(expense.price)
          );
          index++;
        }
      );
    }
  }

}
