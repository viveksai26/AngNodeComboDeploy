import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { AppConstants } from '../../../shared/constants/app-constants';
import { AutheticationService } from '../../../shared/services/authentication/authetication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any;

  constructor(private authService: SocialAuthService, private AutheticationService: AutheticationService) {}

  ngOnInit(): void {}
}
