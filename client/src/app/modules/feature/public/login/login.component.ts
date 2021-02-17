import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      username: [],
      password: [],
    })
  }

}
