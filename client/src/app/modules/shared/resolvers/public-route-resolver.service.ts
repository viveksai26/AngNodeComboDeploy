import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { genericUtils } from '../utils/generic-utils';
@Injectable({
  providedIn: 'root'
})
export class PublicRouteResolverService implements Resolve<any> {
  constructor(private genericUtils: genericUtils) {}
  resolve(): Observable<any> | any {
    this.genericUtils.localStorageRemover;
    return of([]);
  }
}
