import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, ExpenseState, ExpenseHistory } from 'src/app/store/expense.reducer';
import { Store } from '@ngrx/store';
import * as appReducer from './../../store/app.reducer';
import { NgForm } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';
import * as expenseActions from './../../store/expense.action';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  categories$: Observable<Category[]>;
  expense$: Observable<ExpenseHistory>;

  @ViewChild('f') editForm: NgForm;

  constructor(private store: Store<ExpenseHistory>,
              private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.categories$ = this.store.select(appReducer.getCategory);
    this.expense$ = this.store.select(appReducer.getEditElement);
  }

  onSave() {
    let expenseId = '';
    this.expense$.subscribe(
      expense => expenseId = expense.ExpenseId
    );
    this.expenseService.updateExpense({ExpenseId: expenseId, 
                                       ItemName: this.editForm.value.ItemName,
                                       Price: this.editForm.value.Price,
                                       Category: this.editForm.value.Category,
                                       Comment: this.editForm.value.Comment,
                                       PurchaseDate: this.editForm.value.PurchaseDate,
                                       isEdited: true});

  }

  onCancel() {
    this.expenseService.expenseTabSelect.next(0);
    this.store.dispatch(new expenseActions.SetEditModeOff);
  }
}
