import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePathConstant } from '../../../constants/route-path-constants';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-secure-sidebar',
  templateUrl: './secure-sidebar.component.html',
  styleUrls: ['./secure-sidebar.component.css']
})
export class SecureSidebarComponent implements OnInit {
  userData: any;
  gUserData: any;
  fbUserData: any;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.user;
    this.gUserData = this.userService.gUser;
    this.fbUserData = this.userService.fbUser;
  }
  goToProfile() {
    this.router.navigate([RoutePathConstant.ROUTE_PROFILE]);
  }
  goToHome() {
    this.router.navigate([RoutePathConstant.ROUTE_HOME]);
  }
}
