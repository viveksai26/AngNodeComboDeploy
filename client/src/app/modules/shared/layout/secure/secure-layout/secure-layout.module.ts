import { NgModule } from '@angular/core';
import { SecureLayoutComponent } from './secure-layout.component';
import { SecureHeaderComponent } from '../secure-header/secure-header.component';
import { SecureFooterComponent } from '../secure-footer/secure-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SecureLayoutComponent, SecureHeaderComponent, SecureFooterComponent],
    imports: [RouterModule],
    exports: [SecureLayoutComponent]
})
export class SecureLayoutModule { }
