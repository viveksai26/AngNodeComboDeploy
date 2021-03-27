import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnInit {
  data: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.queryParams;
  }
}
