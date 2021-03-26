import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SocialAuthService } from 'angularx-social-login';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConstants } from '../constants/app-constants';
import { AutheticationService } from '../services/authentication/authetication.service';
@Injectable({
  providedIn: 'root'
})
export class CommonRouteResolverService implements Resolve<any> {
  constructor(private authService: SocialAuthService, private AutheticationService: AutheticationService) {
    console.log('In common route resolver');
  }
  resolve(): Observable<any> {
    return of([])
    // return this.authService.authState
    // .pipe(
    //   tap((user) => {
    //     console.log('auth state', user);
    //     localStorage.setItem(AppConstants.G_ID_TOKEN, user.idToken);
    //     localStorage.setItem(AppConstants.G_AUTH_TOKEN, user.authToken);
    //     this.AutheticationService.isLoggedIn = true;
    //   }),
    //   catchError((error) => {
    //     console.log('auth state', error);
    //     localStorage.removeItem(AppConstants.G_ID_TOKEN);
    //     localStorage.removeItem(AppConstants.G_AUTH_TOKEN);
    //     this.AutheticationService.isLoggedIn = false;
    //     return of([]);
    //   })
    // );
  }
}
