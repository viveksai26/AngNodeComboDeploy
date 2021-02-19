import { Component, OnInit } from '@angular/core';
import { UserService } from 'client/src/app/modules/shared/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: any;
  gUserData: any;
  fbUserData: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.user;
    this.gUserData = this.userService.gUser;
    this.fbUserData = this.userService.fbUser;
    console.log(this.gUserData, this.fbUserData);
  }
}
