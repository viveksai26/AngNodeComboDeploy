import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConstants } from '../../shared/constants/app-constants';
import { AutheticationService } from '../../shared/services/authentication/authetication.service';
import { RoutePathConstant } from '../../shared/constants/route-path-constants';
import { UserService } from '../../shared/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private autheticationService: AutheticationService,
    private router: Router,
    private userService: UserService
  ) {}
  canActivate(): Observable<boolean> {
    let idToken = localStorage.getItem(AppConstants.ID_TOKEN);
    return this.autheticationService.verifyToken(idToken).pipe(
      tap((data) => {
        console.log(data);
        this.userService.user = data;
      }),
      map((data) => true),
      catchError((err) => {
        this.router.navigate([RoutePathConstant.ROUTE_LOGIN]);
        return of(false);
      })
    );
  }
}
