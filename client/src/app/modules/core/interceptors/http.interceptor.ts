import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('g-id-token');
    // eslint-disable-next-line no-param-reassign
    request = request.clone({
      setHeaders: {
        Authorization: token
      }
    });
    return next.handle(request);
  }
}
