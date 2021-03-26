import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../../constants/app-constants';
import { RoutePathConstant } from '../../../constants/route-path-constants';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-secure-sidebar',
  templateUrl: './secure-sidebar.component.html',
  styleUrls: ['./secure-sidebar.component.css']
})
export class SecureSidebarComponent implements OnInit {
  userData: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const userToken = localStorage.getItem(AppConstants.G_ID_TOKEN);
    if (userToken) {
      this.userData = jwt_decode(userToken);
      console.log(this.userData);
    }
  }
  goToProfile() {
    this.router.navigate([RoutePathConstant.ROUTE_PROFILE]);
  }
  goToHome() {
    this.router.navigate([RoutePathConstant.ROUTE_HOME]);
  }
  goToLogin() {
    this.router.navigate([RoutePathConstant.ROUTE_LOGIN]);
  }
}
