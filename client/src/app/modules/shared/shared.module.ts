import { NgModule } from '@angular/core';
import { PublicLayoutModule } from './layout/public/public-layout/public-layout.module';

@NgModule({
    imports: [PublicLayoutModule],
    exports: [PublicLayoutModule],
    providers: [],
})
export class SharedModule { }
