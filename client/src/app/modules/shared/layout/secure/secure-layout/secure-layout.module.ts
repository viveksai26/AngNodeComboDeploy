import { NgModule, OnInit } from '@angular/core';
import { SecureLayoutComponent } from './secure-layout.component';
import { SecureHeaderComponent } from '../secure-header/secure-header.component';
import { SecureFooterComponent } from '../secure-footer/secure-footer.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../../../styles/app-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecureSidebarComponent } from '../secure-sidebar/secure-sidebar.component';
@NgModule({
  declarations: [SecureLayoutComponent, SecureHeaderComponent, SecureFooterComponent, SecureSidebarComponent],
  imports: [RouterModule, AppMaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SecureLayoutComponent]
})
export class SecureLayoutModule {
  constructor() {}
}
