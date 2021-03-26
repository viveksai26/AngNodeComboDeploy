import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { EventEmitter } from '@angular/core';
import { RoutePathConstant } from '../../../constants/route-path-constants';
import { AppConstants } from '../../../constants/app-constants';
import jwt_decode from 'jwt-decode';
import { AutheticationService } from '../../../services/authentication/authetication.service';

@Component({
  selector: 'app-secure-header',
  templateUrl: './secure-header.component.html',
  styleUrls: ['./secure-header.component.css']
})
export class SecureHeaderComponent implements OnInit {
  @Output() sideBarTrigger = new EventEmitter();
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private AutheticationService: AutheticationService
  ) {}
  isMenuVisible: boolean = false;
  isLoggedIn: boolean;
  subscriptionsArray: any = [];
  ngOnInit(): void {
    // this.sideBarTrigger.emit(true);
    this.isLoggedIn = this.AutheticationService.isLoggedIn;
  }
  signOut(): void {
    this.authService.signOut();
    this.router.navigate([RoutePathConstant.ROUTE_LOGIN]);
  }
  login() {
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
