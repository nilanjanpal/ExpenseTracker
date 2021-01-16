import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import * as authActions from './../store/auth.action';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { ExpenseService } from './expense.service';
import { DashboardService } from './dashboard.service';
import { auth } from 'firebase';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
  })
export class AuthService {
    constructor(private afAuth: AngularFireAuth,
                private fireStore: AngularFirestore,
                private store: Store,
                private snackbar: MatSnackBar,
                private router: Router,
                private expenseService: ExpenseService,
                private dashboardService: DashboardService,
                private cookieService: CookieService) {}

    subscription: Subscription;

    login(email: string, password: string): void {
        this.store.dispatch(new authActions.StartBuffer());
        this.afAuth.signInWithEmailAndPassword(email, password)
        .then(
            (result) => {
                this.expenseService.getCategories();
                const userId = result.user.uid;
                this.store.dispatch(new authActions.StopBuffer());
                this.store.dispatch(new authActions.Authenticate(userId));
                this.router.navigate(['/dashboard']);
                this.cookieService.set('user', JSON.stringify(result));
            }
        )
        .catch(
                error => {
                    this.snackbar.open(error, 'Dismiss', {duration: 5000});
                    this.store.dispatch(new authActions.StopBuffer());
                }
        );
    }

    signup(userDetail): void {
        this.store.dispatch(new authActions.StartBuffer());
        this.afAuth.createUserWithEmailAndPassword(userDetail.email, userDetail.password)
        .then(
            result => {
                this.expenseService.getCategories();
                this.store.dispatch(new authActions.StopBuffer());
                this.fireStore.collection('UserDetail').add({ UserId: result.user.uid,
                                                              Name: userDetail.name,
                                                              EmailId: userDetail.email,
                                                              DateOfBirth: userDetail.dob});
                this.store.dispatch(new authActions.Authenticate(result.user.uid));
                this.router.navigate(['/dashboard']);
                this.cookieService.set('user', JSON.stringify(result));
            }
        )
        .catch(
            error => {
                this.snackbar.open(error, 'Dismiss', {duration: 5000});
                this.store.dispatch(new authActions.StopBuffer());
            }
        );
    }

    logout(): void {

        for (const subscription of this.expenseService.subscription) {
          subscription.unsubscribe();
        }
        for (const subscription of this.dashboardService.subscription) {
          subscription.unsubscribe();
        }
        for (const subscription of this.dashboardService.allExpenseSubscription) {
          subscription.unsubscribe();
        }
        for (const subscription of this.dashboardService.monthlyExpenseSubscription) {
          subscription.unsubscribe();
        }
        for (const subscription of this.dashboardService.sixMonthCategorySubscription) {
          subscription.unsubscribe();
        }
        if (this.dashboardService.sixMonthSubscription){
            this.dashboardService.sixMonthSubscription.unsubscribe();
        }
        if (this.subscription !== undefined){
          this.subscription.unsubscribe();
        }
        this.afAuth.signOut()
        .then(
            result => {
                this.store.dispatch(new authActions.UnAuthenticate());
                this.router.navigate(['/login']);
                this.cookieService.delete('user');
            }
        );
    }

    signInWithGoogle(): void {
      this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        result => {
          this.expenseService.getCategories();
          this.store.dispatch(new authActions.StopBuffer());
          this.store.dispatch(new authActions.Authenticate(result.user.uid));
          this.router.navigate(['/dashboard']);
        }
      )
      .catch(
        error => {
            this.snackbar.open(error, 'Dismiss', {duration: 5000});
            this.store.dispatch(new authActions.StopBuffer());
        }
      );
    }

    signInWithFacebook(): void {
      this.afAuth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(
        result => {
          this.expenseService.getCategories();
          this.store.dispatch(new authActions.StopBuffer());
          this.store.dispatch(new authActions.Authenticate(result.user.uid));
          this.router.navigate(['/dashboard']);
        }
      )
      .catch(
        error => {
          this.snackbar.open(error, 'Dismiss', {duration: 5000});
          this.store.dispatch(new authActions.StopBuffer());
        }
      );
    }
}
