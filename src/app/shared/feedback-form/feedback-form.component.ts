import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AuthState } from '../../store/auth.reducer';
import * as appReducer from './../../store/app.reducer';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  @ViewChild('f') feedbackForm: NgForm;

  constructor(private matdialog: MatDialogRef<FeedbackFormComponent>,
              private store: Store<AuthState>,
              private feedbackService: FeedbackService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    this.store.select(appReducer.getUserId)
      .pipe(take(1))
      .subscribe(
        userId => {
          this.feedbackService.saveFeedBack({UserId: userId, Comments: this.feedbackForm.value.comments});
        }
      );
  }

}
