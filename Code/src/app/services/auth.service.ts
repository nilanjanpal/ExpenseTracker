import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as authActions from './../store/auth.action';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDetail } from './../model/user-detail';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store,
    private snackbar: MatSnackBar,
    private router: Router,
    private dashboardService: DashboardService,
    private http: HttpClient,
    private toastr: ToastrService) { }

  private token: String = '';

  getToken() {
    return this.token;
  }

  autoLogin() {
    // const result = this.cookieService.get('user');
    // if (result != "") {
    //   const user = JSON.parse(result);
    //   if (new Date(user.user.stsTokenManager.expirationTime) > new Date()) {
    //     // this.expenseService.getCategories().then(
    //     //   () => {
    //     //     this.store.dispatch(new authActions.Authenticate(user.user.uid, ''));
    //     //     // this.router.navigate(['/dashboard']);
    //     //     this.dashboardService.setExpenseDetail();
    //     //   }
    //     // );
    //   }
    // }
    // else {
    //   this.router.navigate(['/login']);
    // }
  }

  login(email: string, password: string): void {
    this.store.dispatch(new authActions.StartBuffer());
    this.store.dispatch(new authActions.StartAuthentication());
    this.http.post<{ token: string, message: string }>(environment.url + "authenticate", { userName: email, password: password })
      .subscribe(
        (response) => {
          this.token = response.token;
          if (response.token != "" || response.token != null) {
            this.http.get<UserDetail>(environment.url + "user/" + email)
              .subscribe(
                (user) => {
                  const displayName = user.firstName + " " + user.lastName;
                  this.store.dispatch(new authActions.StopBuffer());
                  this.store.dispatch(new authActions.Authenticate(user.id, displayName));
                  this.dashboardService.initLoadData();
                  this.router.navigate(['/dashboard']);
                },
                (error) => {
                  this.snackbar.open(response.message, 'Dismiss', {duration: 5000});
                  this.store.dispatch(new authActions.StopBuffer());
                  this.store.dispatch(new authActions.StopAuthentication());                  
                }
              );
          }
        }
      );
  }

  signup(userDetail): void {
    const userData = {
      username: userDetail.username,
      email: userDetail.email,
      password: userDetail.password,
      dateOfBirth: userDetail.dob,
      firstName: userDetail.firstname,
      lastName: userDetail.lastname
    };
    this.store.dispatch(new authActions.StartBuffer());
    this.http.post<{token:string, message:string}>(environment.url + "signup", userData)
    .subscribe(
      (response) => {
        this.store.dispatch(new authActions.StopBuffer());
        this.toastr.success('Success', 'User signup complete');
        this.router.navigate(['/login']);
      },
      (error) => {
        this.snackbar.open(error.message, 'Dismiss', {duration: 5000});
        this.store.dispatch(new authActions.StopBuffer());
        this.store.dispatch(new authActions.StopAuthentication());                  
      }
    );
  }

  logout(): void {
    this.token = "";
    this.store.dispatch(new authActions.UnAuthenticate());
    this.router.navigate(['/login']);
  }

  signInWithGoogle(): void {
    // this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    //   .then(
    //     result => {
    //       // this.expenseService.getCategories();
    //       this.store.dispatch(new authActions.StopBuffer());
    //       this.store.dispatch(new authActions.Authenticate(result.user.uid, ''));
    //       this.router.navigate(['/dashboard']);
    //     }
    //   )
    //   .catch(
    //     error => {
    //       this.snackbar.open(error, 'Dismiss', { duration: 5000 });
    //       this.store.dispatch(new authActions.StopBuffer());
    //     }
    //   );
  }

  signInWithFacebook(): void {
  //   this.afAuth.signInWithPopup(new auth.FacebookAuthProvider())
  //     .then(
  //       result => {
  //         // this.expenseService.getCategories();
  //         this.store.dispatch(new authActions.StopBuffer());
  //         this.store.dispatch(new authActions.Authenticate(result.user.uid, ''));
  //         this.router.navigate(['/dashboard']);
  //       }
  //     )
  //     .catch(
  //       error => {
  //         this.snackbar.open(error, 'Dismiss', { duration: 5000 });
  //         this.store.dispatch(new authActions.StopBuffer());
  //       }
  //     );
  }
}
