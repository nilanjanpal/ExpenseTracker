import {HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './../store/auth.reducer';
import * as appReducer from './../store/app.reducer';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.getToken();
        // const authRequest = req.clone({headers: req.headers.set('Authorization','Bearer '+token), withCredentials: true});
        // console.log(authRequest);
        const authRequest = req.clone({withCredentials: true});
        return next.handle(authRequest);
    }

}