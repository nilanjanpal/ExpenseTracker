import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseHistory, ExpenseState } from 'src/app/store/expense.reducer';
import * as appReducer from './../../store/app.reducer';
import { Observable, Subscription } from 'rxjs';
import { MatLegacyTableDataSource as MatTableDataSource, MatLegacyTable as MatTable } from '@angular/material/legacy-table';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import * as expenseActions from './../../store/expense.action';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';

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
    private matDialog: MatDialog) {
      this.store.dispatch(new expenseActions.SetLoadingOn);
  }

  ngOnInit(): void {
    this.startDate = new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1);
    this.endDate = new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0);
    this.isLoading$ = this.store.select(appReducer.getExpenseLoading);
    this.displayedColumn$ = this.store.select(appReducer.getDisplayedColumns);
    // Below subscription need to be unsubscribed else will be too many subscription
    this.store.select(appReducer.getExpenses)
    .subscribe(
      data => this.datasource.data = [...data]
    )
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

  // ngAfterContentInit() {
  //   // console.log('ngDoCheck');
  //   this.store.select(appReducer.getExpenses)
  //   .subscribe(
  //     data => this.datasource.data = [...data]
  //   )
  // }


  filterData() {
    let startDate: Date;
    let endDate: Date;
    if (this.searchForm !== undefined) {
      startDate = this.searchForm.value.startDate === undefined ? this.startDate : this.searchForm.value.startDate;
      endDate = this.searchForm.value.endDate === undefined ? this.endDate : this.searchForm.value.endDate;
    }
    else {
      startDate = this.startDate;
      endDate = this.endDate;
    }
    this.store.dispatch(new expenseActions.SetSearchDate(startDate, endDate));
    this.expenseService.refreshExpenses();
  }
}
