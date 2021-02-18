import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { RoutePathConstant } from '../../../constants/route-path-constants';
import { genericUtils } from '../../../utils/generic-utils';
@Component({
  selector: 'app-secure-header',
  templateUrl: './secure-header.component.html',
  styleUrls: ['./secure-header.component.css'],
})
export class SecureHeaderComponent implements OnInit {
  constructor(private authService: SocialAuthService, private genericUtils: genericUtils, private router: Router) {}

  ngOnInit(): void {}
  signOut(): void {
    this.genericUtils.localStorageRemover();
    this.authService.signOut();
    this.router.navigate([RoutePathConstant.ROUTE_LOGIN]);
  }
}
