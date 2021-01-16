import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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

  newExpenseForm: FormGroup;
  categories$: Observable<Category[]>;

  constructor(private expenseService: ExpenseService,
              private store: Store<ExpenseState>) { }

  ngOnInit(): void {
    this.initForm();
    this.categories$ = this.store.select(appReducer.getCategory);
  }

  initForm() {
    this.newExpenseForm = new FormGroup({
      expenseItemArray: new FormArray([])
    });
  }

  addNewExpenseItem() {
    (<FormArray>this.newExpenseForm.get('expenseItemArray'))
    .push(new FormGroup({
      purchaseDate: new FormControl('', Validators.required),
      itemName: new FormControl('', Validators.required),
      itemPrice: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      comment: new FormControl('')
    }));
  }

  onDelete(index) {
    (<FormArray>this.newExpenseForm.get('expenseItemArray')).removeAt(index);
  }

  onSubmit() {
    this.expenseService.saveExpenses(this.newExpenseForm.value.expenseItemArray);
    const expenseItemArrayLength = this.newExpenseForm.get('expenseItemArray')['controls'].length;
    for(let i=0; i<expenseItemArrayLength; i++){
      this.onDelete(i);
    }
  }
}
