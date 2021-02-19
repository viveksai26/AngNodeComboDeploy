import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AppConstants } from '../../../shared/constants/app-constants';
import { RoutePathConstant } from '../../../shared/constants/route-path-constants';
import { AutheticationService } from '../../../shared/services/authentication/authetication.service';
import { UserService } from '../../../shared/services/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: any;
  hide: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private authService: SocialAuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formGenerator();
  }
  formGenerator() {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem(AppConstants.G_ID_TOKEN, user.idToken);
      localStorage.setItem(AppConstants.G_AUTH_TOKEN, user.authToken);
      this.router.navigate([RoutePathConstant.ROUTE_PROFILE]);
    });
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.setItem(AppConstants.FB_ID_TOKEN, user.idToken);
      localStorage.setItem(AppConstants.FB_AUTH_TOKEN, user.authToken);
      this.router.navigate([RoutePathConstant.ROUTE_PROFILE]);
    });
  }
}
