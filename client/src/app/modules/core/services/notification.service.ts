import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarComponent } from './notification/snackbar.component';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  isMenuVisible: any = new BehaviorSubject(false);
  snackBarRef: any;
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}
  openSnackBar(message, action) {
    this.snackBarRef = this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 5000,
      data: { message, action },
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
}
