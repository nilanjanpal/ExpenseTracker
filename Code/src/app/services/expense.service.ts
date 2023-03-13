import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as expenseActions from './../store/expense.action';
import * as appReducer from './../store/app.reducer';
import { Observable, Subject,  Subscription } from 'rxjs';
import { ExpenseHistory } from './../store/expense.reducer';
import { map, switchMap, take } from 'rxjs/operators';
import { DashboardService } from './dashboard.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class ExpenseService {

    expenseTabSelect = new Subject<number>();
    subscription: Subscription[] = [];

    constructor(private store: Store<{ Name: string, Description: string }>,
                private http: HttpClient,
                private dashboardService: DashboardService,
                private toastr: ToastrService) { }

    saveExpenses(expenseItems): void {
        let expenseHistory: ExpenseHistory[] = [];
        this.store.select(appReducer.getUserId).subscribe(
            userId => {
                expenseItems.map(
                    item => {
                        const expenseItem: ExpenseHistory = {
                            id: null,
                            userId: userId,
                            itemName: item.itemName,
                            comment: item.comment,
                            purchaseDate: item.purchaseDate,
                            category: item.category,
                            price: item.itemPrice,
                            edited: false
                        }
                        expenseHistory.push(expenseItem);
                    }
                );
                this.http.post(environment.url+"expenses",expenseHistory)
                .pipe(take(1))
                .subscribe(
                    () => {
                        this.refreshExpenses();
                        this.dashboardService.refreshData();
                        this.toastr.success('Success', 'Expense added successfully');
                        // console.log('Insert complete successfully');
                    }
                )
                // this.dashboardService.setExpenseDetail().then(
                //     () => {
                //         this.expenseTabSelect.next(0);
                //     }
                // );
            }
        );
    }
    
    refreshExpenses() {
        let startDate: string;
        let endDate: string;
        this.store.select(appReducer.getStartDate)
        .pipe(take(1))
        .subscribe(
            (date: Date) => {
                startDate = date.toDateString();
                this.store.select(appReducer.getEndDate)
                .pipe(take(1))
                .subscribe(
                    (date: Date) => {
                        endDate = date.toDateString();
                        if(startDate === "" && endDate === "") {
                            startDate = (new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1)).toDateString();
                            endDate = (new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0)).toDateString();
                        }
                        this.getExpenses(startDate, endDate)
                        .subscribe(
                        (data:ExpenseHistory[]) => {
                            this.store.dispatch(new expenseActions.SetExpenseData(data));
                            this.store.dispatch(new expenseActions.SetLoadingOff);
                        });
                    }
                )
            }
        )
    }

    getExpenses(startDate: string, endDate: string): Observable<ExpenseHistory[]> {
        return this.store.select(appReducer.getUserId)
        .pipe(
            switchMap(
                (id) => {
                    return this.http.get<{id:string, userId:string, itemName: string, comment: string, purchaseDate: string, category: string, price: number, edited: boolean}[]>(environment.url+"expenses", {params: {"id": id, "startDate": startDate, "endDate": endDate}})
                    .pipe(
                        map(
                            data => {
                                let expense: ExpenseHistory[] = [];
                                data.map(
                                    element => {
                                        expense.push({
                                            id: element.id,
                                            userId: element.userId,
                                            itemName: element.itemName,
                                            comment: element.comment,
                                            purchaseDate: new Date(element.purchaseDate),
                                            category: element.category,
                                            price: element.price,
                                            edited: element.edited
                                        });
                                    }
                                );
                                return expense;
                            }
                        )
                    )
                }
            )
        )
    }

    deleteExpense(expenseId: string): void {
        this.store.select(appReducer.getUserId)
        .pipe(take(1))
        .subscribe(
            (id) => {
                this.http.delete(environment.url+"expenses", {params:{"expenseId":expenseId}})
                .pipe(take(1))
                .subscribe(
                    () => {
                        this.refreshExpenses();
                        this.dashboardService.refreshData();
                        this.toastr.success('Information', 'Expense deleted successfully');
                        // this.toastr.fireSuccess('Information','Expense deleted successfully');
                        console.log("Item deleted");
                    }
                );
            }
        )
    }

    updateExpense(expense: ExpenseHistory): void {
        this.store.select(appReducer.getUserId)
        .pipe(take(1))
        .subscribe(
            id => {
                expense.userId = id;
                this.http.post(environment.url+"expense",expense)
                .pipe(take(1))
                .subscribe(
                    () => {
                        this.refreshExpenses();
                        this.store.dispatch(new expenseActions.SetEditModeOff());
                        this.dashboardService.refreshData();
                        this.toastr.success('Success', 'Expense updated successfully');
                        // this.toastr.fireSuccess('Success','Expense updated successfully');
                        console.log('Update complete successfully');
                    }
                )
            }
        )
    }

}
