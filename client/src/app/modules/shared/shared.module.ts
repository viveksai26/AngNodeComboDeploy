import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicLayoutModule } from './layout/public/public-layout/public-layout.module';
import { AppMaterialModule } from './styles/app-material.module';

@NgModule({
    imports: [CommonModule, FormsModule, PublicLayoutModule, AppMaterialModule, ReactiveFormsModule],
    exports: [CommonModule, FormsModule, PublicLayoutModule, AppMaterialModule, ReactiveFormsModule],
    providers: []
})
export class SharedModule { }
