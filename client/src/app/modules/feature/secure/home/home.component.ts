import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userData: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.user;
  }
}
