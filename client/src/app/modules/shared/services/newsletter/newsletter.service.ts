import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from '../../constants/api-urls';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(private http: HttpClient) {}
  addPushSubscriber(subscriber) {
    this.http.post(ApiUrls.SUBSCRIBE_NEWSLETTER, subscriber).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getSubscribers() {
    return this.http.get(ApiUrls.CHECK_SUBSCRIBERS);
  }

  clearSubscribers() {
    return this.http.get(ApiUrls.CLEAR_SUBSCRIBERS);
  }

  sendNewsletter() {
    return this.http.get(ApiUrls.SEND_NEWSLETTER);
  }
}
