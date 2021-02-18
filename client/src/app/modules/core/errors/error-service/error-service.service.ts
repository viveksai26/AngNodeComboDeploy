import { Injectable, Injector } from '@angular/core';
import { Event, NavigationError, Router } from '@angular/router';

@Injectable()
export class ErrorServiceService {
  constructor(private injector: Injector, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationError) {
        this.router.navigate(['/error']);
      }
    });
  }
}
