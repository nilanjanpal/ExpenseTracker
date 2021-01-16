import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { AuthState } from 'src/app/store/auth.reducer';
import * as appReducer from './../../store/app.reducer';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f', {static: false}) loginForm: NgForm;

  constructor(private route: Router,
              private authService: AuthService,
              private store: Store<AuthState>,
              private afAuth: AngularFireAuth,
              private cookieService: CookieService) { }

  isBufferOn$: Observable<boolean>;

  ngOnInit(): void {
    this.isBufferOn$ = this.store.select(appReducer.getIsBufferOn);
  }

  onSignUp() {
    this.route.navigate(["/signup"]);
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  onClear() {
    this.loginForm.reset();
  }

  onSigninWithFacebook() {
    this.authService.signInWithFacebook();
  }

  onSigninWithGoogle() {
    this.authService.signInWithGoogle();
  }
}
