import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { first, take } from 'rxjs/operators';
import * as appReducer from './../store/app.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterContentInit {

  @ViewChild('f') userForm: NgForm;
  username: string = '';
  firstname: string = '';
  lastname: string = '';
  dateofbirth: Date = null;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
      this.store.select(appReducer.getUsername)
      .pipe(take(1))
      .subscribe(
        username => {
          this.username = username;
        }
      );

      this.store.select(appReducer.getFirstName)
      .pipe(take(1))
      .subscribe(
        firstname => {
          this.firstname = firstname
        }
      );

      this.store.select(appReducer.getLastName)
      .pipe(take(1))
      .subscribe(
        lastname => {
          this.lastname = lastname
        }
      );

      this.store.select(appReducer.getDateOfBirth)
      .pipe(take(1))
      .subscribe(
        dateofbirth => {
          this.dateofbirth = dateofbirth
        }
      );
  }

  onSubmit() {
    console.log(this.userForm);
  }

}
