import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConstants } from '../../shared/constants/app-constants';
import { RoutePathConstant } from '../../shared/constants/route-path-constants';
import { AutheticationService } from '../../shared/services/authentication/authetication.service';
import { UserService } from '../../shared/services/user/user.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private autheticationService: AutheticationService,
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  canActivate(): Observable<boolean> {
    let gIdToken = localStorage.getItem(AppConstants.G_ID_TOKEN);
    if (gIdToken) {
      return this.autheticationService.verifyGToken(gIdToken).pipe(
        tap((data) => {
          this.userService.gUser = data;
        }),
        map((data) => true),
        catchError((err) => {
          this.notificationService.openSnackBar(err?.error?.error, 'dismiss');
          this.router.navigate([RoutePathConstant.ROUTE_LOGIN]);
          return of(false);
        })
      );
    }
    return of(false);
  }
}
