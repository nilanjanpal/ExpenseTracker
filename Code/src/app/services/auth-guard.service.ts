import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './../store/auth.reducer';
import * as appReducer from './../store/app.reducer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as authActions from './../store/auth.action';

@Injectable({
    providedIn: 'root',
  })
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AuthState>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {
        // return false;
        return this.store.select(appReducer.getIsAuthenticated);
    }
}