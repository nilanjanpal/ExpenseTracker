import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
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
  signupForm: UntypedFormGroup;

  ngOnInit(): void {
    this.initForm();
    this.isBufferOn$ = this.store.select(appReducer.getIsBufferOn);
  }

  initForm() {
    this.signupForm = new UntypedFormGroup({
      email: new UntypedFormControl('',[Validators.required, Validators.email]),
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new UntypedFormControl('', Validators.required),
      displayName: new UntypedFormControl('', Validators.required),
      dob: new UntypedFormControl('', Validators.required),
      tnc: new UntypedFormControl(false, Validators.required)
    });
  }

  onClear() {
    this.signupForm.reset();
  }

  onSubmit() {
    this.authService.signup(this.signupForm.value);
  }

}
