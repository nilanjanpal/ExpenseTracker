import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as authActions from './../store/auth.action';

export class AuthEffect{

    constructor(private actions$: Actions, private http: HttpClient) {}

    // loginStart = createEffect(() => {
    //     this.actions$.pipe(
    //         ofType(authActions.START_AUTHENTICATION),
    //         switchMap(
    //             () => {
    //                 const httpOptions = {
    //                     headers: new HttpHeaders({'Content-Type':  'application/json'})
    //                 };
    //                 return this.http.post<{token: string,message: string}>(environment.url + "authenticate", { userName: username, password: password }, httpOptions);
    //             }
    //         )
    //     )
    // });
}