import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoLoginService } from '../../../core/guards/AutoLoginService';
import { AuthGuardService } from '../../../core/guards/Auth.guard';
import { SecureLayoutComponent } from '../../../shared/layout/secure/secure-layout/secure-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: SecureLayoutComponent,
    children: [
      {
        path: '',
        component: UserLayoutComponent,
        canActivate: [AutoLoginService],
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
