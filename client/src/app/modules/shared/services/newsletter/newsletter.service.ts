import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiUrls } from '../../constants/api-urls';
import { AppConstants } from '../../constants/app-constants';
import { RoutePathConstant } from '../../constants/route-path-constants';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(private http: HttpClient) {}
  addPushSubscriber(subscriber) {
    this.http.post('https://user-management-rs.herokuapp.com/api/subscribe', subscriber).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
