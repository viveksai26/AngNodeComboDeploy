import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((module) => module.HomeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((module) => module.UserModule)
  },
  {
    path: 'manage-newsletter',
    loadChildren: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import('./manage-subscribers/manage-subscribers.module').then((module) => module.ManageSubscribersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule {}
