import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ExpenseHistory, ExpenseState } from 'src/app/store/expense.reducer';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { ExpenseService } from 'src/app/services/expense.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import * as expenseActions from './../../../store/expense.action';
import * as appReducer from './../../../store/app.reducer';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css']
})
export class ExpenseTableComponent implements AfterViewInit {

  @Input() displayedColumn$: Observable<string[]>;
  @Input() datasource: MatTableDataSource<ExpenseHistory>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private expenseService: ExpenseService,
              private store: Store<ExpenseState>,
              private matDialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.datasource.paginator = this.paginator;
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
