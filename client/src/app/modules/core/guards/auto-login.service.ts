import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConstants } from '../../shared/constants/app-constants';
import { AutheticationService } from '../../shared/services/authentication/authetication.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginService implements CanActivate {
  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private AutheticationService: AutheticationService
  ) {}

  canActivate(): Observable<any> {
    return this.authService.authState.pipe(
      tap((user) => {
        if (user) {
          localStorage.setItem(AppConstants.G_ID_TOKEN, user.idToken);
          localStorage.setItem(AppConstants.G_AUTH_TOKEN, user.authToken);
          this.AutheticationService.isLoggedIn = true;
        } else {
          localStorage.removeItem(AppConstants.G_ID_TOKEN);
          localStorage.removeItem(AppConstants.G_AUTH_TOKEN);
          this.AutheticationService.isLoggedIn = false;
        }
      }),
      map((data) => true),
      catchError((error) => {
        localStorage.removeItem(AppConstants.G_ID_TOKEN);
        localStorage.removeItem(AppConstants.G_AUTH_TOKEN);
        this.AutheticationService.isLoggedIn = false;
        return of(true);
      })
    );
  }
}
