import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrls } from '../../constants/api-urls';

@Injectable({
  providedIn: 'root',
})
export class AutheticationService {
  declare gapi: any;
  public auth2: any;
  constructor(private http: HttpClient) {}
  verifyToken(idToken): Observable<any> {
    return this.http.get<any>(ApiUrls.verifyIdToken.replace('{idToken}', idToken));
  }
}
