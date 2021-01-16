import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from './../../services/auth.service';
import * as appReducer from './../../store/app.reducer';
import { AuthState } from 'src/app/store/auth.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,
              private store: Store<AuthState>) { }

  isBufferOn$: Observable<boolean>;
  signupForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.isBufferOn$ = this.store.select(appReducer.getIsBufferOn);
  }

  initForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      tnc: new FormControl(false, Validators.required)
    });
  }

  onClear() {
    this.signupForm.reset();
  }

  onSubmit() {
    this.authService.signup(this.signupForm.value);
  }

}
