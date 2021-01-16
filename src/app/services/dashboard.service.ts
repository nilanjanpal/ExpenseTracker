import { Injectable, resolveForwardRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store, createReducerFactory } from '@ngrx/store';
import { DashboardState, ExpenseSummary } from './../store/dashboard.reducer';
import * as appReducer from './../store/app.reducer';
import { Subscription } from 'rxjs';
import { map, take} from 'rxjs/operators';
import {
  ExpenseHistory,
  ExpenseState,
  Category,
} from '../store/expense.reducer';
import * as dashboardActions from './../store/dashboard.action';
import { SixMonthSummary } from './../store/dashboard.reducer';
import { SixMonthCategorySummary } from './../store/dashboard.reducer';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  subscription: Subscription[] = [];
  sixMonthSubscription: Subscription;
  allExpenseSubscription: Subscription[] = [];
  monthlyExpenseSubscription: Subscription[] = [];
  sixMonthCategorySubscription: Subscription[] = [];

  private monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor(
    private angularfire: AngularFirestore,
    private store: Store<DashboardState>,
    private expenseStore: Store<ExpenseState>
  ) {}

  getAllExpenses(): Promise<void> {
    return new Promise((resolve) => {
      this.store
        .select(appReducer.getUserId)
        .pipe(take(1))
        .subscribe((userId) => {
          this.allExpenseSubscription.push(
            this.angularfire
              .collection('ExpenseHistory', (ref) => {
                return ref.where('UserId', '==', userId);
              })
              .snapshotChanges()
              .pipe(
                map((result) => {
                  return result.map((result) => {
                    const id = result.payload.doc.id;
                    const data = result.payload.doc.data() as ExpenseHistory;
                    data.ExpenseId = id;
                    data.PurchaseDate = result.payload.doc
                      .get('PurchaseDate')
                      .toDate();
                    return { ...data };
                  });
                })
              )
              .subscribe((result) => {
                this.store.dispatch(
                  new dashboardActions.GetAllExpenses(result)
                );
                resolve();
              })
          );
        });
    });
  }

  getPreviousMonthExpenses(): Promise<number> {
    return new Promise(
      (resolve) => {
        let monthlyExpense = 0;
        const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
        const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
        this.expenseStore.select(appReducer.getAllExpenses)
        .pipe(take(1))
        .subscribe(
          allExpenses => {
            for (const expense of allExpenses) {
              if (expense.PurchaseDate >= startDate && expense.PurchaseDate <= endDate) {
                monthlyExpense = monthlyExpense + expense.Price;
              }
            }
            resolve(monthlyExpense);
          }
        );
      }
    );
  }

  getCurrentMonthExpenses(): Promise<ExpenseSummary[]> {
    return new Promise((resolve) => {
      let monthlyExpenses: ExpenseSummary[] = [];
      const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
      this.monthlyExpenseSubscription.map((subscription) =>
        subscription.unsubscribe()
      );
      this.monthlyExpenseSubscription.push(
        this.expenseStore
          .select(appReducer.getCategory)
          .subscribe((categories) => {
            monthlyExpenses = [];
            categories.map((category) => {
              let sum = 0;
              this.monthlyExpenseSubscription.push(
                this.store
                  .select(appReducer.getAllExpenses)
                  .subscribe((allExpenses) => {
                    allExpenses.map((expense) => {
                      if (
                        expense.Category === category.Name &&
                        expense.PurchaseDate >= startDate &&
                        expense.PurchaseDate <= endDate
                      ) {
                        sum = sum + expense.Price;
                      }
                    });
                    const exp: ExpenseSummary = {
                      category: category.Name,
                      price: sum,
                    };
                    monthlyExpenses.push(exp);
                  })
              );
              resolve(monthlyExpenses);
            });
          })
      );
    });
  }

  getlastSixMonths(): Promise<string[]> {
    return new Promise((resolve) => {
      
      const index = new Date().getMonth();
      const lastSixMonths: string[] = [
        this.monthName[((index + 0 + 7) >= 12) ? index + 0 + 7 - 12 : index + 0 + 7],
        this.monthName[((index + 1 + 7) >= 12) ? index + 1 + 7 - 12 : index + 1 + 7],
        this.monthName[((index + 2 + 7) >= 12) ? index + 2 + 7 - 12 : index + 2 + 7],
        this.monthName[((index + 3 + 7) >= 12) ? index + 3 + 7 - 12 : index + 3 + 7],
        this.monthName[((index + 4 + 7) >= 12) ? index + 4 + 7 - 12 : index + 4 + 7],
        this.monthName[((index + 5 + 7) >= 12) ? index + 5 + 7 - 12 : index + 5 + 7],
      ];
      resolve(lastSixMonths);
    });
  }

  getLastSixMonthExpense(): Promise<SixMonthSummary[]> {
    return new Promise((resolve) => {
      this.getlastSixMonths().then((lastSixMonths: string[]) => {
        let sixMonthSummary: SixMonthSummary[] = [];
        if (this.sixMonthSubscription !== undefined) {
          this.sixMonthSubscription.unsubscribe();
        }
        this.sixMonthSubscription = this.store
          .select(appReducer.getAllExpenses)
          .subscribe((allExpenses) => {
            sixMonthSummary = [];
            const index = new Date().getMonth();
            let expenseArray: number[] = [0, 0, 0, 0, 0, 0];
            let summary: SixMonthSummary;
            allExpenses.map((expense) => {
              switch (expense.PurchaseDate.getMonth()) {
                case (((index + 0 + 7) >= 12) ? index + 0 + 7 - 12 : index + 0 + 7):
                  expenseArray[0] = expenseArray[0] + expense.Price;
                  break;
                case (((index + 1 + 7) >= 12) ? index + 1 + 7 - 12 : index + 1 + 7):
                  expenseArray[1] = expenseArray[1] + expense.Price;
                  break;
                case (((index + 2 + 7) >= 12) ? index + 2 + 7 - 12 : index + 2 + 7):
                  expenseArray[2] = expenseArray[2] + expense.Price;
                  break;
                case (((index + 3 + 7) >= 12) ? index + 3 + 7 - 12 : index + 3 + 7):
                  expenseArray[3] = expenseArray[3] + expense.Price;
                  break;
                case (((index + 4 + 7) >= 12) ? index + 4 + 7 - 12 : index + 4 + 7):
                  expenseArray[4] = expenseArray[4] + expense.Price;
                  break;
                case (((index + 5 + 7) >= 12) ? index + 5 + 7 - 12 : index + 5 + 7):
                  expenseArray[5] = expenseArray[5] + expense.Price;
                  break;
              }
            });
            for (
              let monthIndex = 0;
              monthIndex < lastSixMonths.length;
              monthIndex++
            ) {
              summary = {
                month: lastSixMonths[monthIndex],
                price: expenseArray[monthIndex],
              };
              sixMonthSummary.push(summary);
            }
            resolve(sixMonthSummary);
          });
      });
    });
  }

  getSixMonthCategorySummary(): Promise<SixMonthCategorySummary[]> {
      return new Promise((resolve) => {
      const monthIndex = new Date().getMonth();
      let categorySummary: SixMonthCategorySummary[] = [];
      this.sixMonthCategorySubscription.map((subscription) =>
        subscription.unsubscribe()
      );
      this.getTopSixExpenseCategory().then(
        (topExpenseCategories: ExpenseSummary[]) => {
          topExpenseCategories.map((topExpenseCategory) => {
            let expenseSummary: ExpenseSummary[] = [];
            this.sixMonthCategorySubscription.map((subscription) =>
              subscription.unsubscribe()
            );
            this.sixMonthCategorySubscription.push(
              this.expenseStore
                .select(appReducer.getAllExpenses)
                .subscribe((allExpenses: ExpenseHistory[]) => {
                  this.getlastSixMonths().then(
                    (lastSixMonths: string[]) => {
                      for(let mIndex=0; mIndex<lastSixMonths.length; mIndex++) {
                        let sum = 0;
                        for (const expense of allExpenses) {
                          if (
                            this.monthName[expense.PurchaseDate.getMonth()] === lastSixMonths[mIndex] &&
                            expense.Category === topExpenseCategory.category
                          ) {
                            sum = sum + expense.Price;
                          }
                        }
                        expenseSummary.push({
                          category: topExpenseCategory.category,
                          price: sum,
                        });
                      }
                      categorySummary.push({
                        category: topExpenseCategory.category,
                        expense: [...expenseSummary],
                      });
                      resolve(categorySummary);
                    }
                  );
                })
            );
          });
        }
      );
    });
  }

  getTopSixExpenseCategory(): Promise<ExpenseSummary[]> {
    return new Promise((resolve) => {
      const index = new Date().getMonth();
      let sixMonthExpense: ExpenseSummary[] = [];
      this.expenseStore
          .select(appReducer.getCategory)
          .pipe(take(1))
          .subscribe((categories: Category[]) => {
            for (const category of categories) {
              let sum = 0;
              this.store
                  .select(appReducer.getAllExpenses)
                  .pipe(take(1))
                  .subscribe((allExpenses: ExpenseHistory[]) => {
                    sum = 0;
                    for (const allExpenseItem of allExpenses) {
                      if (allExpenseItem.Category === category.Name) {
                        switch(allExpenseItem.PurchaseDate.getMonth()) {
                          case (((index + 0 + 7) >= 12) ? index + 0 + 7 - 12 : index + 0 + 7):
                          case (((index + 1 + 7) >= 12) ? index + 1 + 7 - 12 : index + 1 + 7):
                          case (((index + 2 + 7) >= 12) ? index + 2 + 7 - 12 : index + 2 + 7):
                          case (((index + 3 + 7) >= 12) ? index + 3 + 7 - 12 : index + 3 + 7):
                          case (((index + 4 + 7) >= 12) ? index + 4 + 7 - 12 : index + 4 + 7):
                          case (((index + 5 + 7) >= 12) ? index + 5 + 7 - 12 : index + 5 + 7):
                            sum = sum + allExpenseItem.Price;    
                        }
                      }
                    }
                  });
              if (sixMonthExpense.length < 6 && sum > 0) {
                sixMonthExpense.push({
                  category: category.Name,
                  price: sum,
                });
                for (
                  let expenseIndex = 0;
                  expenseIndex < sixMonthExpense.length - 1;
                  expenseIndex++
                ) {
                  if (
                    sixMonthExpense[expenseIndex].price <
                    sixMonthExpense[expenseIndex + 1].price
                  ) {
                    const swapVariable = { ...sixMonthExpense[expenseIndex] };
                    sixMonthExpense[expenseIndex] = {
                      ...sixMonthExpense[expenseIndex + 1],
                    };
                    sixMonthExpense[expenseIndex + 1] = { ...swapVariable };
                  }
                }
              }
              if (sixMonthExpense.length === 6 && sum > 0) {
                let swapIndex = 0;
                for (
                  let expenseIndex = 0;
                  expenseIndex < sixMonthExpense.length;
                  expenseIndex++
                ) {
                  if (sum >= sixMonthExpense[expenseIndex].price) {
                    swapIndex = expenseIndex;
                  }
                }
                for (
                  let expenseIndex = sixMonthExpense.length;
                  expenseIndex > swapIndex;
                  expenseIndex--
                ) {
                  sixMonthExpense[expenseIndex] = {
                    ...sixMonthExpense[expenseIndex - 1],
                  };
                }
                sixMonthExpense[swapIndex] = {
                  category: category.Name,
                  price: sum,
                };
              }
            }
            resolve(sixMonthExpense);
          });
    });
  }
}
