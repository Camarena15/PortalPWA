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
      fetch('http://localhost:3000/user/singin', {
        method: 'POST', 
        body: JSON.stringify({
          'user': usr,
          'pass': pass
        }), 
        headers:{
        'Content-Type': 'application/json'
        }
      })
      .then(response =>response.json())
      .then(data =>{
          debugger;
          if(data=="ok"){
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
