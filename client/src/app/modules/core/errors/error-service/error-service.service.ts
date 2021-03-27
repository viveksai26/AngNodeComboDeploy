import { Injectable, Injector } from '@angular/core';
import { Event, NavigationError, Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class ErrorServiceService {
  constructor(private injector: Injector, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationError) {
        this.log(event.error).subscribe((errorWithContext) => {
          this.router.navigate(['/error'], { queryParams: errorWithContext });
        });
      }
    });
  }
  log(error) {
    const errorToSend = this.addContext(error);
    // Send error to server.
    return of(errorToSend);
  }
  addContext(error) {
    return error;
  }
}
