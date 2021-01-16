import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import * as appReducer from './../store/app.reducer';
import { Store } from '@ngrx/store';
import { ExpenseState } from '../store/expense.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  selectedIndex = 0;
  isEditMode$: Observable<boolean>;

  constructor(private expenseService: ExpenseService,
              private store: Store<ExpenseState>) { }

  ngOnInit(): void {
    this.expenseService.expenseTabSelect.subscribe(
      index => {
        this.selectedIndex = index;
      }
    );
    this.isEditMode$ = this.store.select(appReducer.getEditMode);
  }

}
