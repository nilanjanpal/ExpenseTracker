import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserDetail } from '../model/user-detail';
import { DashboardService } from '../services/dashboard.service';
import * as authActions from './../store/auth.action';
import * as userActions from './../store/user.action';
import * as dashboardActions from './../store/dashboard.action';

@Injectable()
export class AuthEffect{

    constructor(private actions$: Actions, 
                private http: HttpClient,
                private dashboardService: DashboardService,
                private router: Router) {}

    loginStart = createEffect(() => {
        return this.actions$.pipe(
            ofType(authActions.START_AUTHENTICATION),
            switchMap(
                (authData: authActions.StartAuthentication) => {
                    const httpOptions = {
                        headers: new HttpHeaders({'Content-Type':  'application/json'})
                    };
                    return this.http.post<{token: string,message: string}>(environment.url + "authenticate", { userName: authData.username, password: authData.password }, httpOptions)
                    .pipe(
                        map((response) => {
                            return new authActions.Authenticate(response.token, authData.username)
                        }),
                        catchError(error => {return of(error)})
                    )
                }
            )
        )
    });

    setDataUpdateInProgress = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(authActions.START_AUTHENTICATION),
                switchMap(
                    (authData: authActions.StartAuthentication) => {
                        return of(new dashboardActions.SetDataUpdateInProgress(true));
                    }
                )
            )
        }
    );

    authenticate = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(authActions.AUTHENTICATE),
                switchMap(
                    (authData: authActions.Authenticate) => {
                        return this.http.get<UserDetail>(environment.url + "user/" + authData.username)
                        .pipe(
                            map(
                                (user) => {
                                    this.router.navigate(['/dashboard']);
                                    window.sessionStorage.setItem('user', JSON.stringify(user));
                                    return new userActions.SetUserDetail(user);
                                }
                            ),
                            catchError(error => {return of(error)})
                        )
                    }
                )
            )
        }
    );

    setUserId = createEffect(() => {
        return this.actions$.pipe(
            ofType(authActions.SET_USER),
            switchMap(
                () => {
                    this.dashboardService.initLoadData();
                    return of(new authActions.StopAuthentication());
                }
            )
        )
    });
}