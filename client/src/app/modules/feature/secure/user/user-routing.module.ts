import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoLoginService } from '../../../core/guards/auto-login.service';
import { AuthenticationGuardService } from '../../../core/guards/authentication.guard';
import { SecureLayoutComponent } from '../../../shared/layout/secure/secure-layout/secure-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes = [
  {
    path: '',
    component: SecureLayoutComponent,
    children: [
      {
        path: '',
        component: UserLayoutComponent,
        canActivate: [AuthenticationGuardService, AutoLoginService],
        children: [{ path: 'profile', component: UserProfileComponent }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
