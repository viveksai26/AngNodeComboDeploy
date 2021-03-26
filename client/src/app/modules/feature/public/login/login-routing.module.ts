import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoLoginService } from '../../../core/guards/AutoLoginService';
import { PublicLayoutComponent } from '../../../shared/layout/public/public-layout/public-layout.component';
import { CommonRouteResolverService } from '../../../shared/resolvers/common-route-resolver.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AutoLoginService],
    component: PublicLayoutComponent,
    children: [{ path: '', component: LoginComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
