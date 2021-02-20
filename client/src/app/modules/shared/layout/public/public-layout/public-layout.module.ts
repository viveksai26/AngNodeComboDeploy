import { NgModule } from '@angular/core';
import { PublicLayoutComponent } from './public-layout.component';
import { PublicHeaderComponent } from '../public-header/public-header.component';
import { PublicFooterComponent } from '../public-footer/public-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PublicLayoutComponent, PublicHeaderComponent, PublicFooterComponent],
  imports: [RouterModule],
  exports: [PublicLayoutComponent]
})
export class PublicLayoutModule {}
