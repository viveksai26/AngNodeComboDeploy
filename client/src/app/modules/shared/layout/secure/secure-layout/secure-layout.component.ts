import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'client/src/app/modules/core/services/notification.service';
import { AppConstants } from '../../../constants/app-constants';
import { RoutePathConstant } from '../../../constants/route-path-constants';
import { AutheticationService } from '../../../services/authentication/authetication.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-secure-layout',
  templateUrl: './secure-layout.component.html',
  styleUrls: ['./secure-layout.component.css']
})
export class SecureLayoutComponent implements OnInit {
  constructor(
    private router: Router,
    private autheticationService: AutheticationService,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    let gIdToken = localStorage.getItem(AppConstants.G_ID_TOKEN);
    let fbIdToken = localStorage.getItem(AppConstants.FB_AUTH_TOKEN);
    if (gIdToken) {
      return this.autheticationService.verifyGToken(gIdToken).subscribe(
        (data) => {
          this.userService.gUser = data;
        },
        (err) => {
          this.notificationService.openSnackBar(err?.error?.error, 'dismiss');
          this.router.navigate([RoutePathConstant.ROUTE_LOGIN]);
        }
      );
    } else if (fbIdToken) {
      return this.autheticationService.verifyFbToken(fbIdToken).subscribe(
        (data) => {
          this.userService.fbUser = data;
        },
        (err) => {
          this.notificationService.openSnackBar(err?.error?.error, 'dismiss');
          this.router.navigate([RoutePathConstant.ROUTE_LOGIN]);
        }
      );
    }
  }
}
