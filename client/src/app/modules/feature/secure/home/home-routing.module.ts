import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoLoginService } from '../../../core/guards/auto-login.service';
import { SecureLayoutComponent } from '../../../shared/layout/secure/secure-layout/secure-layout.component';
import { CommonRouteResolverService } from '../../../shared/resolvers/common-route-resolver.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AutoLoginService],
    component: SecureLayoutComponent,
    children: [{ path: '', component: HomeComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
