import { Component, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NotificationService } from '../notification.service';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['snackbar.component.css']
})
export class SnackBarComponent {
  constructor(private snackRef: MatSnackBarRef<NotificationService>, @Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
