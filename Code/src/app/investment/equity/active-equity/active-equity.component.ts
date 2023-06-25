import { Component, Input } from '@angular/core';
import { ActiveEquityHolding } from 'src/app/model/equity-detail';

@Component({
  selector: 'app-active-equity',
  templateUrl: './active-equity.component.html',
  styleUrls: ['./active-equity.component.css']
})
export class ActiveEquityComponent {

  @Input() equityItem: ActiveEquityHolding;

}
