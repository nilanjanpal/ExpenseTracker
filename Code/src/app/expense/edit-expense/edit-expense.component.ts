import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
    this.categories$ = this.store.select(appReducer.getCategories);
    this.expense$ = this.store.select(appReducer.getEditElement);
  }

  onSave() {
    let expenseId = '';
    this.expense$.subscribe(
      expense => expenseId = expense.id
    );
    this.expenseService.updateExpense({id: expenseId, 
                                       userId: this.editForm.value.userId,
                                       itemName: this.editForm.value.ItemName,
                                       price: this.editForm.value.Price,
                                       category: this.editForm.value.Category,
                                       comment: this.editForm.value.Comment,
                                       purchaseDate: this.editForm.value.PurchaseDate,
                                       edited: true});
    this.expenseService.expenseTabSelect.next(0);
  }

  onCancel() {
    this.expenseService.expenseTabSelect.next(0);
    this.store.dispatch(new expenseActions.SetEditModeOff);
  }
}
