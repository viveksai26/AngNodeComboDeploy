import { NgModule } from '@angular/core';
import { SecureRoutingModule } from './secure-routing.module';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [SecureRoutingModule, SharedModule],
  declarations: []
})
export class SecureModule {}
