import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { RoutePathConstant } from '../../../constants/route-path-constants';
import { CommonService } from '../../../services/common/common.service';
import { genericUtils } from '../../../utils/generic-utils';
@Component({
  selector: 'app-secure-header',
  templateUrl: './secure-header.component.html',
  styleUrls: ['./secure-header.component.css'],
})
export class SecureHeaderComponent implements OnInit {
  constructor(
    private authService: SocialAuthService,
    private genericUtils: genericUtils,
    private router: Router,
    private commonService: CommonService
  ) {}
  isMenuVisible: boolean = false;
  subscriptionsArray: any = [];
  ngOnInit(): void {
    this.subscriptions();
  }
  signOut(): void {
    this.authService.signOut();
    this.genericUtils.localStorageRemover();
    this.router.navigate([RoutePathConstant.ROUTE_LOGIN]);
  }
  goToProfile() {
    this.router.navigate([RoutePathConstant.ROUTE_PROFILE]);
  }
  subscriptions() {
    this.subscriptionsArray.push(
      this.commonService.isMenuVisible.subscribe((data) => {
        console.log(data);
        this.isMenuVisible = data;
      })
    );
  }
  ngOnDestroy() {
    this.subscriptionsArray.forEach((element) => {
      element.unsubscribe();
    });
  }
}
