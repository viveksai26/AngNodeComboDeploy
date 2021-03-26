import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { genericUtils } from '../utils/generic-utils';
import { SocialAuthService } from 'angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class PublicRouteResolverService implements Resolve<any> {
  constructor(private genericUtils: genericUtils, private authService: SocialAuthService) {
    console.log('In public route resolver');
  }
  resolve(): Observable<any> | any {
    this.genericUtils.localStorageRemover();
    this.authService.signOut();
    return of([]);
  }
}
