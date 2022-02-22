import { Component, OnInit, Input, OnDestroy, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels,
   ApexTitleSubtitle, ApexStroke, ApexGrid, ApexFill, ApexMarkers, ApexYAxis } from "ng-apexcharts";
import { switchMap } from 'rxjs/operators';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-yearly-expense-graph',
  templateUrl: './yearly-expense-graph.component.html',
  styleUrls: ['./yearly-expense-graph.component.css']
})
export class YearlyExpenseGraphComponent implements OnInit, OnChanges {
  
  @Input() lastAnnualExpense: number[];
  @Input() months: string[];
  public chartOptions: Partial<ChartOptions>;

  lineChartLabels$: Observable<string>;
  chartDataSubscription: Subscription;
 
  constructor(private dashboardService: DashboardService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = {
      series: [
        {
          name: "Amount",
          data: [...this.lastAnnualExpense]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: 7,
        curve: "smooth"
      },
      xaxis: {
        type: "category",
        categories: [...this.months]
      },
      title: {
        text: "Last 12 Months Expense Detail",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      yaxis: {
        min: Math.min(...this.lastAnnualExpense),
        max: Math.max(...this.lastAnnualExpense)
        ,
        title: {
          text: "Expense Amount"
        }
      }
    };
  }
  
  ngOnInit(): void {}

}
