import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {

  constructor() {}

  saveFeedBack(feedbackDetail): void {
    // this.firestore.collection('Feedback').add({UserId: feedbackDetail.UserId,
    //                                            Comments: feedbackDetail.Comments});
  }
}
