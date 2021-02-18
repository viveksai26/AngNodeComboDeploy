import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserSideBarComponent } from './user-side-bar/user-side-bar.component';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [UserProfileComponent, UserLayoutComponent, UserSideBarComponent],
  imports: [UserRoutingModule, SharedModule]
})
export class UserModule {}
