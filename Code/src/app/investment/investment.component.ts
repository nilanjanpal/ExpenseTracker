import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent {

  @ViewChild('tab') tabGroup;
  newInsurance: Subject<void> = new Subject<void>();
  newEquity: Subject<void> = new Subject<void>();

  addNew() {
    this.tabGroup._tabs._results.map(
      element => {
        if(element.isActive) {
          switch(element.textLabel) {
            case 'Equity':
              this.addNewEquity();
              break;
            case 'Mutual Fund':
              break;
            case 'NPS':
              break;
            case 'PPF':
              break;
            case 'Insurance':
              this.addNewInsurance();
              break;
          }
        }
      }
    );
  }

  addNewInsurance() {
    this.newInsurance.next();
  }

  addNewEquity() {
    this.newEquity.next();
  }

}
