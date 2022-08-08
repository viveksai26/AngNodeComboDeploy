import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'client/src/app/modules/shared/constants/app-constants';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: any;
  gUserData: any;
  fbUserData: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userToken = localStorage.getItem(AppConstants.G_ID_TOKEN);
    if (userToken) {
      this.gUserData = jwt_decode(userToken);
    }
  }
  goToManageSubscription() {
    this.router.navigate(['manage-newsletter']);
  }
}
