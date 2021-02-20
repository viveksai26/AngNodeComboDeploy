import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../../core/guards/auth.guard';
import { SecureLayoutComponent } from '../../../shared/layout/secure/secure-layout/secure-layout.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: SecureLayoutComponent,
    canActivate: [AuthGuardService],
    children: [{ path: '', component: HomeComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
