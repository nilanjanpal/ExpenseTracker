import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { categoryExpense, DashboardState } from './../store/dashboard.reducer';
import * as appReducer from './../store/app.reducer';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ExpenseHistory, ExpenseState } from '../store/expense.reducer';
import * as dashboardActions from './../store/dashboard.action';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  categoryChangeEvent = new Subject<number[]>();
  monthlyExpenseChangeEvent = new Subject<Observable<{categories: string[],
                                                      monthlyCategoryExpense: number[],
                                                      totalExpense: number}>>();
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

  getPreviousMonthTotalExpense() {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
    const previousMonthExpenseDetail$ = this.calculateExpenseDataByDate(startDate, endDate);
    return previousMonthExpenseDetail$;
  }

  /* 
    Description - Method to fetch expense data between start date and end date passed in the 
                  parameters .
    Input Parameters -
      startDate - start Date of the range
      end Date  - end Date of the range 
    Returns -
      An object with the total amount of expense between start date and end date. Also the 
      categories and sum of expenses for each category.
  */
  calculateExpenseDataByDate(startDate: Date, endDate: Date) {
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
                const categoryExpenseData: categoryExpense[] = [];
                result.map((result) => {
                  const id = result.payload.doc.id;
                  const data = result.payload.doc.data() as ExpenseHistory;
                  data.ExpenseId = id;
                  data.PurchaseDate = result.payload.doc
                    .get('PurchaseDate')
                    .toDate();
                  const categoryIndex = categoryExpenseData.findIndex((result) => data.Category == result.category );
                  if(categoryIndex == -1) {
                    categoryExpenseData.push({category: data.Category, expense: data.Price});
                  }
                  else {
                    categoryExpenseData[categoryIndex].expense = categoryExpenseData[categoryIndex].expense + data.Price;
                  }
                });
                return {totalExpense: categoryExpenseData.reduce((acc, price) => acc + price.expense, 0)}
              })
            )
          }
      ));
  }

  getCurrentYearCategoryExpenseData() {
    const startDate = new Date(new Date().getFullYear(), 0, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    return this.getExpenseHistoryDetailByDateRange(startDate, endDate)
    .pipe(
      map(
        (result) => {
          const categoryExpenseData: categoryExpense[] = [];
          result.expenseDetail.map(
            expenseData => {
              const categoryIndex = categoryExpenseData.findIndex((categoryResult) => expenseData.Category == categoryResult.category );
              if(categoryIndex == -1) {
                categoryExpenseData.push({category: expenseData.Category, expense: expenseData.Price});
              }
              else {
                categoryExpenseData[categoryIndex].expense = categoryExpenseData[categoryIndex].expense + expenseData.Price;
              }
            }
          );
          return {categoryExpenseData: categoryExpenseData};
        }
      )
    );
  }

  getTrendingExpenses() {
    return this.getCurrentYearCategoryExpenseData()
    .pipe(
      map(
        (data) => {
          const categoryExpenseData = [... data.categoryExpenseData];
          categoryExpenseData.sort((a, b) => b.expense - a.expense);
          const expenseData = categoryExpenseData.slice(0,5);
          return {categoryExpense:[...expenseData]};
        }
      )
    );
  }

  getCurrentMonthExpenseDetail() {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    return this.store.select(appReducer.getExpenseHistory)
    .pipe(
      map(
        (expenseHistoryData) => {
          let totalExpense: number = 0;
          expenseHistoryData.map(
            expenseItem => {
              if(expenseItem.PurchaseDate >= startDate && expenseItem.PurchaseDate <= endDate) {
                totalExpense = totalExpense + expenseItem.Price;
              }
            }
          );
          this.store.dispatch(new dashboardActions.StopCurrentMonthExpenseCalculation);
          return totalExpense;
        }
      )
    );
  }

  getPreviousMonthExpenseDetail() {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() == 0 ? 11 : new Date().getMonth() -1, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
    return this.store.select(appReducer.getExpenseHistory)
    .pipe(
      map(
        (expenseHistoryData) => {
          let totalExpense: number = 0;
          expenseHistoryData.map(
            expenseItem => {
              if(expenseItem.PurchaseDate >= startDate && expenseItem.PurchaseDate <= endDate) {
                totalExpense = totalExpense + expenseItem.Price;
              }
            }
          );
          this.store.dispatch(new dashboardActions.StopCurrentMonthExpenseCalculation);
          return totalExpense;
        }
      )
    );
  }

  getTwelveMonthExpenseDetail() {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 11, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const annualExpenseDetail$ = this.calculateExpenseDataByDate(startDate, endDate);
    return annualExpenseDetail$;
  }
  
  getAnnualExpenseDetailByCategory(category: String) {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 11, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const expenseDetail = [{expense: 0, monthName: 'January'},
                           {expense: 0, monthName: 'February'},
                           {expense: 0, monthName: 'March'},
                           {expense: 0, monthName: 'April'},
                           {expense: 0, monthName: 'May'},
                           {expense: 0, monthName: 'June'},
                           {expense: 0, monthName: 'July'},
                           {expense: 0, monthName: 'August'},
                           {expense: 0, monthName: 'September'},
                           {expense: 0, monthName: 'October'},
                           {expense: 0, monthName: 'November'},
                           {expense: 0, monthName: 'December'}];
    return this.store
      .select(appReducer.getUserId)
      .pipe(switchMap(
        (userId: string) => { 
          return this.angularfire
            .collection('ExpenseHistory', (ref) => {
              return ref.where('UserId', '==', userId)
                        .where('Category', '==', category)
                        .where('PurchaseDate', '>=', startDate)
                        .where('PurchaseDate', '<=', endDate);
            })
            .snapshotChanges()
            .pipe(
              map((result) => {
                const sixMonthExpenseDetail: ExpenseHistory[] = [];
                result.map((result) => {
                  const data = result.payload.doc.data() as ExpenseHistory;
                  const id = result.payload.doc.id;
                  data.ExpenseId = id;
                  const purchaseDate = result.payload.doc.get('PurchaseDate').toDate();
                  data.PurchaseDate = purchaseDate;
                  sixMonthExpenseDetail.push(data);
                  const monthIndex = purchaseDate.getMonth();
                  expenseDetail[monthIndex].expense = expenseDetail[monthIndex].expense + data.Price; 
                });
                this.store.dispatch(new dashboardActions.StopSixMonthGraphLoading);
                this.store.dispatch(new dashboardActions.SetSixMonthExpenseHistory(sixMonthExpenseDetail));
                return [...expenseDetail];
              })
            )
          }
      ),
      take(1));
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
                const sixMonthExpenseSummary: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
                    case currentMonthIndex:
                      sixMonthExpenseSummary[5] = sixMonthExpenseSummary[5] + data.Price;
                      categorySummary[5] = data.Category == categoryName ? categorySummary[5] + data.Price : categorySummary[5];
                      break;
                  }
                });
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

  /* 
    Description - Method to fetch expense history data between start date and end date passed in the 
                  parameters .
    Input Parameters -
      startDate - start Date of the range
      end Date  - end Date of the range 
    Returns -
      All the expense history data between the date mentioned in the input parameters
  */
  getExpenseHistoryDetailByDateRange(startDate: Date, endDate: Date) {
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
                const expenseData: ExpenseHistory[] = [];
                result.map((result) => {
                  const id = result.payload.doc.id;
                  const data = result.payload.doc.data() as ExpenseHistory;
                  data.ExpenseId = id;
                  data.PurchaseDate = result.payload.doc
                    .get('PurchaseDate')
                    .toDate();
                  expenseData.push(data);
                });
                return {expenseDetail: expenseData};
              })
            )
          }
      ));
  }
  
  setExpenseDetail() : Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        const startDate = new Date(new Date().getFullYear() - 1, 0, 1);
        const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        this.getExpenseHistoryDetailByDateRange(startDate, endDate)
        .pipe(take(1))
        .subscribe(
          (expenseData) => {
            this.store.dispatch(new dashboardActions.SetExpenseHistory(expenseData.expenseDetail));
          }
        );
        resolve(true);
      }
    );
  }

  /* 
    Description - Method to fetch expense data for the last twelve months from current date
    Input Parameters -
      NA 
    Returns -
      An observable with the below parameters -
        months            - An array of string with last twelve months from current date.
        lastAnnualExpense - An array of numbers with expense of last twelve months from current 
                            date.
  */
  getYearlyExpenseDetail() {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() -11, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const lastAnnualExpense: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return this.getlastMonthNames(12)
    .pipe(
      switchMap(
        (months) => {
          return this.getExpenseHistoryDetailByDateRange(startDate, endDate)
          .pipe(
            map(
              expenseData => {
                expenseData.expenseDetail.map(
                  expenseItem => {
                    const index = months.indexOf(this.monthName[expenseItem.PurchaseDate.getMonth()].monthName);
                    lastAnnualExpense[index] = lastAnnualExpense[index] + expenseItem.Price;
                    expenseItem.PurchaseDate.getMonth();
                  }
                );
                return {
                  months: [...months],
                  lastAnnualExpense: [...lastAnnualExpense]
                };
              }
            )
          )
        }
      )
    );
  }

  getCurrentYearExpenseDetail() {
    const startDate = new Date(new Date().getFullYear(), 0, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    return this.getExpenseHistoryDetailByDateRange(startDate, endDate)
    .pipe(
      map(
        (expenseData) => {
          const expenseDetail = expenseData.expenseDetail;
          const totalExpense = expenseDetail.reduce((total, data) => (total + data.Price), 0);
          return totalExpense;
        }
      )
    )
  }

  getPreviousYearExpenseDetail() {
    const startDate = new Date(new Date().getFullYear() - 1, 0, 1);
    const endDate = new Date(new Date().getFullYear() -1 , 11, 31);
    return this.getExpenseHistoryDetailByDateRange(startDate, endDate)
    .pipe(
      map(
        (expenseData) => {
          const expenseDetail = expenseData.expenseDetail;
          const totalExpense = expenseDetail.reduce((total, data) => (total + data.Price), 0);
          return totalExpense;
        }
      )
    )
  }

  getlastMonthNames(numberOfMonths): Observable<string[]> {
    let currentMonthIndex = new Date().getMonth();
    const months: string[] = [];
    for(let index=0; index < numberOfMonths; index++) {
      months.push(this.monthName[currentMonthIndex].monthName);
      currentMonthIndex = this.monthName[currentMonthIndex].previousIndex;
    }
    months.reverse();
    return of(months);
  }

  getAllMonths(): Observable<string[]> {
    const allMonths: string[] = [];
    this.monthName.map(
      month => allMonths.push(month.monthName)
    )
    return of(allMonths);
  }

  getCurrentMonth(): Observable<string> {
    return this.getAllMonths()
    .pipe(
      map(
        (result) => {
          const currentMonth = (new Date()).getMonth();
          return result[currentMonth];
        }
      )
    )
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
                case currentMonthIndex:
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
