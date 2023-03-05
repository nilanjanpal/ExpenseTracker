import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { ExpenseDetail, CategoryExpense, DashboardState } from './../store/dashboard.reducer';
import * as appReducer from './../store/app.reducer';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Category, ExpenseHistory, ExpenseState } from '../store/expense.reducer';
import * as dashboardActions from './../store/dashboard.action';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExpenseAggregateDetail } from './../model/expense-aggregate-detail';
import { ExpenseService } from './expense.service';

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
    private store: Store<DashboardState>,
    private expenseStore: Store<ExpenseState>,
    private http: HttpClient
  ) {}

  initLoadData() {
    this.store.dispatch(new dashboardActions.StartAnnualExpenseGraphLoading);
    this.store.dispatch(new dashboardActions.StartCategoryExpenseGraphLoading);

    this.getCurrentMonthExpenseDetail()
    .pipe(take(1))
    .subscribe(
      data => this.store.dispatch(new dashboardActions.SetCurrentMonthExpense(data))
    );

    this.getPreviousMonthExpenseDetail()
    .pipe(take(1))
    .subscribe(
      data => this.store.dispatch(new dashboardActions.SetPreviousMonthExpense(data))
    );

    this.getCurrentYearExpenseDetail()
    .pipe(take(1))
    .subscribe(
      data => this.store.dispatch(new dashboardActions.SetCurrentYearExpense(data))
    );
    
    this.getPreviousYearExpenseDetail()
    .pipe(take(1))
    .subscribe(
      data => this.store.dispatch(new dashboardActions.SetPreviousYearExpense(data))
    );

    this.getExpenseMonthonMonth()
    .pipe(take(1))
    .subscribe(
      data => this.store.dispatch(new dashboardActions.SetExpenseMonthonMonth(data))
    );

    this.getExpenseYearonYear()
    .pipe(take(1))
    .subscribe(
      data => this.store.dispatch(new dashboardActions.SetExpenseYearonYear(data))
    );

    this.getTrendingExpenses()
    .pipe(take(1))
    .subscribe(
      data => this.store.dispatch(new dashboardActions.SetTrendingExpenses(data))
    );

    this.getCategories()
    .pipe(take(1))
    .subscribe(
      (data:Category[]) => {
        this.store.dispatch(new dashboardActions.SetCategories(data));
        this.getAnnualExpenseDetailByCategory(data[0].Name)
        .pipe(take(1))
        .subscribe(
          data => {
            this.store.dispatch(new dashboardActions.SetCategoryExpenseDetail(data));
            this.store.dispatch(new dashboardActions.StopCategoryExpenseGraphLoading);
          }
        );
      }
    );

    this.getAnnualExpenseDetail()
    .pipe(take(1))
    .subscribe(
      data => {
        this.store.dispatch(new dashboardActions.SetAnnualExpenseDetail(data));
        this.store.dispatch(new dashboardActions.StopAnnualExpenseGraphLoading);
      }
    );
  }

  getTrendingExpenses():Observable<CategoryExpense[]> {
    return this.store.select(appReducer.getUserId)
    .pipe(
      switchMap(
        (id) => {
          return this.http.get<{_id:string,expense:number}[]>(environment.url+"topFiveExpenses",{params: {"id": id}})
          .pipe(
            map((response) => {
              let expense: CategoryExpense[] = [];
              response.forEach(element => {
                expense.push({category: element._id, expense: element.expense})
              });
              return expense;
            })
          )
        }
      )
    )
  }

  getExpenseDetailByYear(year: string) : Observable<number> {
    return this.store.select(appReducer.getUserId)
    .pipe(
      switchMap(
        (id) => {
          return this.http.get<ExpenseAggregateDetail>(environment.url+"expenses/year",{params: {"id": id, "year": year}})
          .pipe(
            map(response => response.expense)
          )
        }
      )
    )
  }

  getExpenseMonthonMonth(): Observable<number> {
    return this.store.select(appReducer.getUserId)
    .pipe(
      switchMap(
        (id) => {
          return this.http.get<ExpenseAggregateDetail>(environment.url+"expenses/mom",{params:{"id":id}})
          .pipe(
            map(response => response.expense)
          )
        }
      )
    )
  }

  getExpenseYearonYear(): Observable<number> {
    return this.store.select(appReducer.getUserId)
    .pipe(
      switchMap(
        (id) => {
          return this.http.get<ExpenseAggregateDetail>(environment.url+"expenses/yoy",{params:{"id":id}})
          .pipe(
            map(response => response.expense)
          )
        }
      )
    )
  }

  getExpenseDetailByMonth(year: string, month: string) :Observable<number> {
    return this.store.select(appReducer.getUserId)
    .pipe(
      switchMap(
        (id) => {
          return this.http.get<ExpenseAggregateDetail>(environment.url+"expenses/month",{params: {"id": id, "year": year, "month": month}})
          .pipe(
            map(response => response.expense)
          )
        }
      )
    );
  }

  refreshData() {
    this.initLoadData();
  }

  getCurrentMonthExpenseDetail() {
    const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const month = date.toLocaleString('en-US', {month: 'long'});
    const year = date.toLocaleString('en-US', {year: 'numeric'});
    return this.getExpenseDetailByMonth(year, month);
  }

  getPreviousMonthExpenseDetail() {
    const date = new Date(new Date().getFullYear(), new Date().getMonth() == 0 ? 11 : new Date().getMonth() -1, 1);
    const month = date.toLocaleString('en-US', {month: 'long'});
    const year = date.toLocaleString('en-US', {year: 'numeric'});
    return this.getExpenseDetailByMonth(year, month);
  }

  getCurrentYearExpenseDetail() {
    const date = new Date(new Date().getFullYear(), 0, 1);
    const year = date.toLocaleString('en-US', {year: 'numeric'});
    return this.getExpenseDetailByYear(year);
  }

  getPreviousYearExpenseDetail() {
    const date = new Date(new Date().getFullYear() - 1, 0, 1);
    const year = date.toLocaleString('en-US', {year: 'numeric'});
    return this.getExpenseDetailByYear(year);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<{id: string,name: string, description: string}[]>(environment.url+"categories")
    .pipe(
      map(
        response => {
          let categories :Category[] = [];
          response.forEach(element => {
            categories.push({Name:element.name, Description:element.description});  
          });
          return categories;
        }
      )
    )
  }
  
  getAnnualExpenseDetailByCategory(category: string):Observable<ExpenseDetail[]> {
    const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const year = date.toLocaleString('en-US', {year: 'numeric'});
    return this.store.select(appReducer.getUserId)
    .pipe(
      switchMap(
        (id) => {
          return this.http.get<{date:{year:string,month:string}, expense:number}[]>(environment.url+"expenseCategorySummary",{params:{"id":id, "year": year, "category":category}})
          .pipe(
            map(response => {
              let expense: ExpenseDetail[] = [];
              response.forEach(element => {
                expense.push({month:element.date.month, amount: element.expense})
              });
              return expense;
            })
          )
        }
      )
    )
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
  getAnnualExpenseDetail(): Observable<ExpenseDetail[]> {
    const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    const year = date.toLocaleString('en-US', {year: 'numeric'});
    return this.store.select(appReducer.getUserId)
    .pipe(
      switchMap(
        (id) => {
          return this.http.get<{date:{year:string,month:string}, expense:number}[]>(environment.url+"expenseSummary",{params:{"id":id, "year": year}})
          .pipe(
            map(response => {
              let expense: ExpenseDetail[] = [];
              response.forEach(element => {
                expense.push({month:element.date.month, amount: element.expense})
              });
              return expense;
            })
          )
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
}
