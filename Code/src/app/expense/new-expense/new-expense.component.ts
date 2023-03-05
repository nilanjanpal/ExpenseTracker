import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, UntypedFormArray } from '@angular/forms';
import { ExpenseService } from './../../services/expense.service';
import { ExpenseState, Category } from 'src/app/store/expense.reducer';
import { Store } from '@ngrx/store';
import * as appReducer from './../../store/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {

  newExpenseForm: UntypedFormGroup;
  categories$: Observable<Category[]>;

  constructor(private expenseService: ExpenseService,
              private store: Store<ExpenseState>) { }

  ngOnInit(): void {
    this.initForm();
    this.categories$ = this.store.select(appReducer.getCategories);
  }

  initForm() {
    this.newExpenseForm = new UntypedFormGroup({
      expenseItemArray: new UntypedFormArray([])
    });
  }

  addNewExpenseItem() {
    (<UntypedFormArray>this.newExpenseForm.get('expenseItemArray'))
    .push(new UntypedFormGroup({
      purchaseDate: new UntypedFormControl('', Validators.required),
      itemName: new UntypedFormControl('', Validators.required),
      itemPrice: new UntypedFormControl('', Validators.required),
      category: new UntypedFormControl('', Validators.required),
      comment: new UntypedFormControl('')
    }));
  }

  onDelete(index) {
    (<UntypedFormArray>this.newExpenseForm.get('expenseItemArray')).removeAt(index);
  }

  onSubmit() {
    this.expenseService.saveExpenses(this.newExpenseForm.value.expenseItemArray);
    const expenseItemArrayLength = this.newExpenseForm.get('expenseItemArray')['controls'].length;
    for(let i=0; i<expenseItemArrayLength; i++){
      this.onDelete(i);
    }
    this.expenseService.expenseTabSelect.next(0);
  }
}
