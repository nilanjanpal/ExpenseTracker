import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs/operators";
import * as userActions from './../store/user.action';
import * as authActions from './../store/auth.action';
import { of } from "rxjs";

@Injectable()
export class UserEffect {

    constructor(private actions$: Actions) {}

    setUser = createEffect(() => {
        return this.actions$.pipe(
            ofType(userActions.SET_USER_DETAIL),
            switchMap(
                (userData: userActions.SetUserDetail) => {
                    return of(new authActions.SetUserId(userData.userDetail.id));
                }
            )
        )
    });

}