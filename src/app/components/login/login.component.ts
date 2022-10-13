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
    const usr =(<HTMLInputElement>document.getElementById("user")).value;
    const pass=(<HTMLInputElement>document.getElementById("password")).value;
    if(usr !== "" && pass !==""){
      fetch('cambiar por url', {
        method: 'POST', 
        body: JSON.stringify({
          'username': usr,
          'password': pass
        }), 
        headers:{
        'Content-Type': 'application/json'
        }
      })
      .then(response =>response.text())
      .then(data =>{
          if(data==""){
              this.router.navigate(['home']);
          }else{
              alert("Acceso denegado");
          }
      });
      
    }else{
      alert("Complete ambos campos por favor");
    }
    
  }

}
