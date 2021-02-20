import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from 'client/src/app/modules/shared/services/common/common.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit, OnDestroy {
  constructor(private commonService: CommonService) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
