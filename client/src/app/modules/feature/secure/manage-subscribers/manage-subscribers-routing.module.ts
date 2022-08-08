import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageSubscribersComponent } from './manage-subscribers/manage-subscribers.component';

const routes: Routes = [
  {
    path: '',
    component: ManageSubscribersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageSubscribersRoutingModule {}
