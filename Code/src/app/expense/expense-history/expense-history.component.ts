import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseHistory, ExpenseState } from 'src/app/store/expense.reducer';
import * as appReducer from './../../store/app.reducer';
import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import * as expenseActions from './../../store/expense.action';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-expense-history',
  templateUrl: './expense-history.component.html',
  styleUrls: ['./expense-history.component.css'],
})
export class ExpenseHistoryComponent implements AfterViewInit, OnInit {

  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('expenseTable') expenseTable: MatTable<any>;

  isLoading$: Observable<boolean>;
  displayedColumn$: Observable<string[]>;
  startDate: Date;
  endDate: Date;
  datasource = new MatTableDataSource<ExpenseHistory>();
  subscription: Subscription;
  dialogRef: MatDialogRef<DialogComponent>;
  filterStartDate: Date;
  filterEndDate: Date;

  constructor(private expenseService: ExpenseService,
    private store: Store<ExpenseState>,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.startDate = new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1);
    this.endDate = new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0);
    this.isLoading$ = this.store.select(appReducer.getExpenseLoading);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.filterData(), 0);
    this.searchForm.valueChanges.subscribe(
      result => {
        this.filterStartDate = this.searchForm.value.endDate;
        this.filterEndDate = this.searchForm.value.startDate;
      }
    );
  }


  filterData() {
    let startDate: Date;
    let endDate: Date;
    this.store.dispatch(new expenseActions.SetLoadingOn);
    if (this.searchForm !== undefined) {
      startDate = this.searchForm.value.startDate === undefined ? this.startDate : this.searchForm.value.startDate;
      endDate = this.searchForm.value.endDate === undefined ? this.endDate : this.searchForm.value.endDate;
    }
    else {
      startDate = this.startDate;
      endDate = this.endDate;
    }
    this.expenseService.getExpenses(startDate, endDate).then(
      () => {
        this.displayedColumn$ = this.store.select(appReducer.getDisplayedColumns);
        if (this.subscription !== undefined) {
          this.subscription.unsubscribe();
        }
        this.subscription = this.store.select(appReducer.getExpenses).subscribe(
          expenses => {
            this.datasource.data = [...expenses];
            this.store.dispatch(new expenseActions.SetLoadingOff);
          }
        );
      });
  }
}
