import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiUrls } from '../../constants/api-urls';
import { AppConstants } from '../../constants/app-constants';
import { RoutePathConstant } from '../../constants/route-path-constants';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  constructor(private http: HttpClient) {}
  isLoggedIn: boolean = false;
  verifyGToken(idToken): Observable<any> {
    return this.http.get<any>(ApiUrls.verifyGIdToken.replace('{idToken}', idToken));
  }
  verifyFbToken(authToken): Observable<any> {
    return this.http.get<any>(ApiUrls.verifyFBAuthToken.replace('{authToken}', authToken));
  }
}
