import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonToggleModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonToggleModule],
})
export class AppMaterialModule {}
