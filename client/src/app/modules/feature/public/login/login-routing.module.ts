import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from '../../../shared/layout/public/public-layout/public-layout.component';
import { PublicRouteResolverService } from '../../../shared/resolvers/public-route-resolver.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    resolve: [PublicRouteResolverService],
    component: PublicLayoutComponent,
    children: [{ path: '', component: LoginComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
