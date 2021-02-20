import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { EventEmitter } from '@angular/core';
import { RoutePathConstant } from '../../../constants/route-path-constants';
import { CommonService } from '../../../services/common/common.service';
import { genericUtils } from '../../../utils/generic-utils';
@Component({
  selector: 'app-secure-header',
  templateUrl: './secure-header.component.html',
  styleUrls: ['./secure-header.component.css']
})
export class SecureHeaderComponent implements OnInit {
  @Output() sideBarTrigger = new EventEmitter();
  constructor(private authService: SocialAuthService, private genericUtils: genericUtils, private router: Router) {}
  isMenuVisible: boolean = false;
  subscriptionsArray: any = [];
  ngOnInit(): void {
    this.sideBarTrigger.emit(true);
  }
  signOut(): void {
    this.authService.signOut();
    this.genericUtils.localStorageRemover();
    this.router.navigate([RoutePathConstant.ROUTE_LOGIN]);
  }
  goToProfile() {
    this.router.navigate([RoutePathConstant.ROUTE_PROFILE]);
  }
  sidebarToggle() {
    this.sideBarTrigger.emit(true);
  }
  ngOnDestroy() {
    this.subscriptionsArray.forEach((element) => {
      element.unsubscribe();
    });
  }
}
