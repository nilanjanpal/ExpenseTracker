import { Component } from '@angular/core';

@Component({
  selector: 'app-equity',
  templateUrl: './equity.component.html',
  styleUrls: ['./equity.component.css']
})
export class EquityComponent{

  panelOpenState = false;
  activeTab = 'Active';

  onActive() {
    this.activeTab = 'Active';
  }

  onTransactionHistory() {
    this.activeTab = 'Transaction History';
  }

  onProfitLoss() {
    this.activeTab = 'Profit/Loss';
  }


}
