import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/app-constants';

@Injectable({
  providedIn: 'root',
})
export class genericUtils {
  localStorageRemover() {
    localStorage.removeItem(AppConstants.ACCESS_TOKEN);
    localStorage.removeItem(AppConstants.ID_TOKEN);
    localStorage.removeItem(AppConstants.AUTH_TOKEN);
  }
}
