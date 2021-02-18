import { Injectable, Injector, OnInit } from '@angular/core';
import { Event, NavigationError, Router } from '@angular/router';

@Injectable()
export class AuthService implements OnInit {
  declare gapi: any;
  public auth2: any;
  constructor(private router: Router) {
  }
  ngOnInit() {
  }
}
