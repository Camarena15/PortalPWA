import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    userName: 'kevin',
    pass: '123'
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logIn(){
    this.router.navigate(['home']);
  }

}
