import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as expenseActions from './../store/expense.action';
import * as appReducer from './../store/app.reducer';
import { Subject,  Subscription } from 'rxjs';
import { ExpenseHistory } from './../store/expense.reducer';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ExpenseService {

    expenseTabSelect = new Subject<number>();
    subscription: Subscription[] = [];

    constructor(private firestore: AngularFirestore,
                private store: Store<{ Name: string, Description: string }>) { }

    getCategories(): Promise<void> {
        return new Promise(
            (resolve) => {
                this.subscription.push(this.firestore.collection('Category').valueChanges()
                .pipe(take(1))
                .subscribe(
                    (result: { Name, Description }[]) => {
                        this.store.dispatch(new expenseActions.FetchCategories(result));
                        resolve();
                    }
                ));
            }
        );
    }

    saveExpenses(expenseItems): void {
        this.store.select(appReducer.getUserId).subscribe(
            userId => {
                expenseItems.map(
                    item => {
                        this.firestore.collection('ExpenseHistory').add({
                            ItemName: item.itemName,
                            Price: item.itemPrice,
                            PurchaseDate: item.purchaseDate,
                            Category: item.category,
                            Comment: item.comment,
                            UserId: userId,
                            isEdited: false
                        });
                    }
                );
                this.expenseTabSelect.next(0);
            }
        );
    }

    getExpenses(startDate: Date, endDate: Date): Promise<void> {
        return new Promise(
            (resolve) => {
                this.subscription.push(this.store.select(appReducer.getUserId).subscribe(
                    userId => {
                        this.subscription.push(this.firestore.collection('ExpenseHistory', ref => {
                                                                                            return ref
                                                                                                    .where('UserId', '==', userId)
                                                                                                    .where('PurchaseDate', '>=', startDate)
                                                                                                    .where('PurchaseDate', '<=', endDate);
                                                                                                })
                            .snapshotChanges()
                            .pipe(
                                map(
                                    result => {
                                        return result.map(
                                            (res) => {
                                                const id = res.payload.doc.id;
                                                const data = res.payload.doc.data() as ExpenseHistory;
                                                data.ExpenseId = id;
                                                data.PurchaseDate = res.payload.doc.get('PurchaseDate').toDate();
                                                return { ...data };
                                            }
                                        );
                                    }
                                )
                            )
                            .subscribe(
                                (result: ExpenseHistory[]) => {
                                    this.store.dispatch(new expenseActions.SetExpenseData([...result]));
                                    resolve();
                                }
                            ));
                    }
                ));
            }
        );
    }

    deleteExpense(expenseId: string): void {
        this.firestore.collection('ExpenseHistory').doc(expenseId).delete();
    }

    updateExpense(expense: ExpenseHistory): void {
        this.firestore.collection('ExpenseHistory').doc(expense.ExpenseId)
        .update({ ItemName: expense.ItemName,
                  Category: expense.Category,
                  Comment: expense.Comment,
                  PurchaseDate: expense.PurchaseDate,
                  Price: expense.Price,
                  isEdited: expense.isEdited})
        .then(
            () => {
                this.expenseTabSelect.next(0);
                this.store.dispatch(new expenseActions.SetEditModeOff());
            }
        );
    }

}
