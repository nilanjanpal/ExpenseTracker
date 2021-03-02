import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { DashboardState } from './../store/dashboard.reducer';
import * as appReducer from './../store/app.reducer';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Category, ExpenseHistory, ExpenseState } from '../store/expense.reducer';
import * as dashboardActions from './../store/dashboard.action';
import * as expenseAction from './../store/expense.action';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  categoryChangeEvent = new Subject<number[]>();
  monthlyExpenseChangeEvent = new Subject<Observable<{categories: string[],
                                                      monthlyCategoryExpense: number[],
                                                      totalMonthlyExpense: number}>>();
  private monthName = [
    {monthName: 'January', nextIndex: 1, previousIndex: 11},
    {monthName: 'February', nextIndex: 2, previousIndex: 0},
    {monthName: 'March', nextIndex: 3, previousIndex: 1},
    {monthName: 'April', nextIndex: 4, previousIndex: 2},
    {monthName: 'May', nextIndex: 5, previousIndex: 3},
    {monthName: 'June', nextIndex: 6, previousIndex: 4},
    {monthName: 'July', nextIndex: 7, previousIndex: 5},
    {monthName: 'August', nextIndex: 8, previousIndex: 6},
    {monthName: 'September', nextIndex: 9, previousIndex: 7},
    {monthName: 'October', nextIndex: 10, previousIndex: 8},
    {monthName: 'November', nextIndex: 11, previousIndex: 9},
    {monthName: 'December', nextIndex: 0, previousIndex: 10}];

  constructor(
    private angularfire: AngularFirestore,
    private store: Store<DashboardState>,
    private expenseStore: Store<ExpenseState>
  ) {}

  getCategories() {
    return this.angularfire
    .collection('Category')
    .snapshotChanges()
    .pipe(
      map((result) => {
        const categoryNames: string[] = [];
        const categories: Category[] = [];
        result.map(
          (item) => {
            const data = item.payload.doc.data() as Category;
            categoryNames.push(data.Name);
            categories.push(data);
          }
        );
        this.expenseStore.dispatch(new expenseAction.FetchCategories(categories));
        return [...categoryNames];
      })
    );
  }

  getPreviousMonthTotalExpense() {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
    return this.store
      .select(appReducer.getUserId)
      .pipe(switchMap(
        (userId: string) => { 
          return this.angularfire
            .collection('ExpenseHistory', (ref) => {
              return ref.where('UserId', '==', userId)
                        .where('PurchaseDate', '>=', startDate)
                        .where('PurchaseDate', '<=', endDate);
            })
            .snapshotChanges()
            .pipe(
              map((result) => {
                const price: number[] = [];
                result.map((result) => {
                  const data = result.payload.doc.data() as ExpenseHistory;
                  price.push(data.Price);
                });
                return price.reduce((acc, price) => acc + price, 0)
              })
            )
          }
      ));
  }

  getMonthlyExpenseDetail(startDate: Date, endDate: Date) {
    return this.store
      .select(appReducer.getUserId)
      .pipe(switchMap(
        (userId: string) => { 
          return this.angularfire
            .collection('ExpenseHistory', (ref) => {
              return ref.where('UserId', '==', userId)
                        .where('PurchaseDate', '>=', startDate)
                        .where('PurchaseDate', '<=', endDate);
            })
            .snapshotChanges()
            .pipe(
              map((result) => {
                const monthlyExpenseData: ExpenseHistory[] = [];
                const categories: string[] = [];
                const monthlyCategoryExpense: number[] = [];
                result.map((result) => {
                  const id = result.payload.doc.id;
                  const data = result.payload.doc.data() as ExpenseHistory;
                  data.ExpenseId = id;
                  data.PurchaseDate = result.payload.doc
                    .get('PurchaseDate')
                    .toDate();
                  const categoryIndex = categories.findIndex((category) => data.Category == category );
                  if(categoryIndex == -1) {
                    categories.push(data.Category);
                    monthlyCategoryExpense.push(data.Price);
                  }
                  else {
                    monthlyCategoryExpense[categoryIndex] = monthlyCategoryExpense[categoryIndex] + data.Price;
                  }
                  monthlyExpenseData.push(data);
                });
                this.store.dispatch(new dashboardActions.StopMonthlyGraphLoading);
                return {categories: [... categories],
                        monthlyCategoryExpense: [... monthlyCategoryExpense],
                        totalMonthlyExpense: monthlyCategoryExpense.reduce((acc, price) => acc + price, 0)}
              })
            )
          }
      ));
  }

  getCurrentMonthExpenseDetail() {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const monthlyExpenseDetail$ = this.getMonthlyExpenseDetail(startDate, endDate);
    return monthlyExpenseDetail$;
  }

  getLastSixMonthExpenseDetail() {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 5, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    return this.store
      .select(appReducer.getUserId)
      .pipe(switchMap(
        (userId: string) => { 
          return this.angularfire
            .collection('ExpenseHistory', (ref) => {
              return ref.where('UserId', '==', userId)
                        .where('PurchaseDate', '>=', startDate)
                        .where('PurchaseDate', '<=', endDate);
            })
            .snapshotChanges()
            .pipe(
              map((result) => {
                const sixMonthExpenseDetail: ExpenseHistory[] = [];
                const categoryName = 'Maid';
                const categorySummary: number[] = [0, 0, 0, 0, 0, 0];
                const sixMonthExpenseSummary: number[] = [0, 0, 0, 0, 0, 0];
                const currentMonthIndex = new Date().getMonth();
                result.map((result) => {
                  const data = result.payload.doc.data() as ExpenseHistory;
                  const id = result.payload.doc.id;
                  data.ExpenseId = id;
                  const purchaseDate = result.payload.doc.get('PurchaseDate').toDate();
                  data.PurchaseDate = purchaseDate;
                  sixMonthExpenseDetail.push(data);
                  switch (purchaseDate.getMonth()) {
                    case this.monthName[this.monthName[this.monthName[this.monthName[this.monthName[currentMonthIndex].previousIndex].previousIndex].previousIndex].previousIndex].previousIndex:
                      sixMonthExpenseSummary[0] = sixMonthExpenseSummary[0] + data.Price;
                      categorySummary[0] = data.Category == categoryName ? categorySummary[0] + data.Price : categorySummary[0];
                      break;
                    case this.monthName[this.monthName[this.monthName[this.monthName[currentMonthIndex].previousIndex].previousIndex].previousIndex].previousIndex:
                      sixMonthExpenseSummary[1] = sixMonthExpenseSummary[1] + data.Price;
                      categorySummary[1] = data.Category == categoryName ? categorySummary[1] + data.Price : categorySummary[1];
                      break;
                    case this.monthName[this.monthName[this.monthName[currentMonthIndex].previousIndex].previousIndex].previousIndex:
                      sixMonthExpenseSummary[2] = sixMonthExpenseSummary[2] + data.Price;
                      categorySummary[2] = data.Category == categoryName ? categorySummary[2] + data.Price : categorySummary[2];
                      break;
                    case this.monthName[this.monthName[currentMonthIndex].previousIndex].previousIndex:
                      sixMonthExpenseSummary[3] = sixMonthExpenseSummary[3] + data.Price;
                      categorySummary[3] = data.Category == categoryName ? categorySummary[3] + data.Price : categorySummary[3];
                      break;
                    case this.monthName[currentMonthIndex].previousIndex:
                      sixMonthExpenseSummary[4] = sixMonthExpenseSummary[4] + data.Price;
                      categorySummary[4] = data.Category == categoryName ? categorySummary[4] + data.Price : categorySummary[4];
                      break;
                    case this.monthName[currentMonthIndex].previousIndex+1:
                      sixMonthExpenseSummary[5] = sixMonthExpenseSummary[5] + data.Price;
                      categorySummary[5] = data.Category == categoryName ? categorySummary[5] + data.Price : categorySummary[5];
                      break;
                  }
                });
                this.store.dispatch(new dashboardActions.StopYearlyGraphLoading);
                this.store.dispatch(new dashboardActions.StopSixMonthGraphLoading);
                this.store.dispatch(new dashboardActions.SetSixMonthExpenseHistory(sixMonthExpenseDetail));
                return {sixMonthExpenseSummary: [... sixMonthExpenseSummary],
                        categorySummary: [...categorySummary], 
                        sixMonthTotalExpense: sixMonthExpenseSummary.reduce((acc, price) => acc + price, 0)}
              })
            )
          }
      ));
  }

  getlastSixMonths(): Observable<string[]> {
    let currentMonthIndex = new Date().getMonth();
    const lastSixMonths: string[] = [];
    for(let index=0; index < 6; index++) {
      lastSixMonths.push(this.monthName[currentMonthIndex].monthName);
      currentMonthIndex = this.monthName[currentMonthIndex].previousIndex;
    }
    lastSixMonths.reverse();
    return of(lastSixMonths);
  }

  getAllMonths(): Observable<string[]> {
    const allMonths: string[] = [];
    this.monthName.map(
      month => allMonths.push(month.monthName)
    )
    return of(allMonths);
  }

  getCategorySummary(categoryName: string) {
    const categorySummary: number[] = [0, 0, 0, 0, 0, 0];
    const currentMonthIndex = new Date().getMonth();
    return this.store.select(appReducer.getSixMonthExpenseHistory)
    .pipe(
      map(
        (data) => {
          data.map(
            (expenseItem) => {
              switch (expenseItem.PurchaseDate.getMonth()) {
                case this.monthName[this.monthName[this.monthName[this.monthName[this.monthName[currentMonthIndex].previousIndex].previousIndex].previousIndex].previousIndex].previousIndex:
                  categorySummary[0] = expenseItem.Category == categoryName ? categorySummary[0] + expenseItem.Price : categorySummary[0];
                  break;
                case this.monthName[this.monthName[this.monthName[this.monthName[currentMonthIndex].previousIndex].previousIndex].previousIndex].previousIndex:
                  categorySummary[1] = expenseItem.Category == categoryName ? categorySummary[1] + expenseItem.Price : categorySummary[1];
                  break;
                case this.monthName[this.monthName[this.monthName[currentMonthIndex].previousIndex].previousIndex].previousIndex:
                  categorySummary[2] = expenseItem.Category == categoryName ? categorySummary[2] + expenseItem.Price : categorySummary[2];
                  break;
                case this.monthName[this.monthName[currentMonthIndex].previousIndex].previousIndex:
                  categorySummary[3] = expenseItem.Category == categoryName ? categorySummary[3] + expenseItem.Price : categorySummary[3];
                  break;
                case this.monthName[currentMonthIndex].previousIndex:
                  categorySummary[4] = expenseItem.Category == categoryName ? categorySummary[4] + expenseItem.Price : categorySummary[4];
                  break;
                case this.monthName[currentMonthIndex].previousIndex+1:
                  categorySummary[5] = expenseItem.Category == categoryName ? categorySummary[5] + expenseItem.Price : categorySummary[5];
                  break;
              }
            }
          );
          return [... categorySummary];
        }
      ),
      take(1)
    )
    .subscribe(
      (categorySummary) => this.categoryChangeEvent.next(categorySummary)
    );
  }
}
