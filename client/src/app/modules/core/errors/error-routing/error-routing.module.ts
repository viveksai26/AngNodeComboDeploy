import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponentComponent } from '../error-component/error-component.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {}
