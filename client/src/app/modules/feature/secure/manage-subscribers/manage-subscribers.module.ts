import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageSubscribersRoutingModule } from './manage-subscribers-routing.module';
import { ManageSubscribersComponent } from './manage-subscribers/manage-subscribers.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ManageSubscribersComponent],
  imports: [CommonModule, ManageSubscribersRoutingModule, SharedModule]
})
export class ManageSubscribersModule {}
