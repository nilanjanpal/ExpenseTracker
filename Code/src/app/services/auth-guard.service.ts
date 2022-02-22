import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './../store/auth.reducer';
import * as appReducer from './../store/app.reducer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as authActions from './../store/auth.action';

@Injectable({
    providedIn: 'root',
  })
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AuthState>,
                private cookieService: CookieService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {
        const result = this.cookieService.get('user');
        if(result != "") {
            const user = JSON.parse(result);
            if( new Date(user.user.stsTokenManager.expirationTime) > new Date() ) {
                this.store.dispatch(new authActions.Authenticate(user.user.uid,''));
                // return true;
            }
        }
        // return false;
        return this.store.select(appReducer.getIsAuthenticated);
    }
}