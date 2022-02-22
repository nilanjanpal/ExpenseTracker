import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {

  constructor(private firestore: AngularFirestore) {}

  saveFeedBack(feedbackDetail): void {
    this.firestore.collection('Feedback').add({UserId: feedbackDetail.UserId,
                                               Comments: feedbackDetail.Comments});
  }
}
