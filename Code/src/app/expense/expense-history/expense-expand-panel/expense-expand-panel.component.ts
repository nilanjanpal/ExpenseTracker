import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseHistory, ExpenseState } from 'src/app/store/expense.reducer';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { ExpenseService } from 'src/app/services/expense.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import * as expenseActions from './../../../store/expense.action';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';

@Component({
  selector: 'app-expense-expand-panel',
  templateUrl: './expense-expand-panel.component.html',
  styleUrls: ['./expense-expand-panel.component.css']
})
export class ExpenseExpandPanelComponent implements OnInit {

  @Input() displayedColumn$: Observable<string[]>;
  @Input() datasource  = new MatTableDataSource<ExpenseHistory>();;

  constructor(private expenseService: ExpenseService,
              private store: Store<ExpenseState>,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  confirmDelete(expenseId: string) {
    const dialogRef = this.matDialog.open(DialogComponent, { data: { dialogType: 1 } });
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.expenseService.deleteExpense(expenseId);
        }
      }
    );
  }

  openComment(expenseComment: string) {
    const dialogRef = this.matDialog.open(DialogComponent, { data: { dialogType: 2, comment: expenseComment } });
  }

  onEdit(element: ExpenseHistory) {
    this.store.dispatch(new expenseActions.SetEditModeOn);
    this.store.dispatch(new expenseActions.SetEditExpenseElement(element));
    this.expenseService.expenseTabSelect.next(2);
  }

}
