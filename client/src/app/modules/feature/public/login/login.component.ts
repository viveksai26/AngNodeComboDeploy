import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { RoutePathConstant } from '../../../shared/constants/route-path-constants';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NotificationService } from '../../../core/services/notification.service';
import { AppConstants } from '../../../shared/constants/app-constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  loginFormGroup: any;
  hide: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private authService: SocialAuthService,
    private NotificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGenerator();
  }
  formGenerator() {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  signInWithGoogle(): void {
    this.startBlocking();
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user) => {
        this.stopBlocking();
        localStorage.setItem(AppConstants.G_ID_TOKEN, user.idToken);
        localStorage.setItem(AppConstants.G_AUTH_TOKEN, user.authToken);
        this.router.navigate([RoutePathConstant.ROUTE_PROFILE]);
      },
      (error) => {
        console.log(error);
        this.NotificationService.openSnackBar(error?.error, 'dismiss');
        this.stopBlocking();
      }
    );
  }
  goToHome() {
    this.router.navigate([RoutePathConstant.ROUTE_HOME]);
  }
  startBlocking() {
    this.blockUI.start(); // start blocking
  }
  stopBlocking() {
    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);
  }
}
