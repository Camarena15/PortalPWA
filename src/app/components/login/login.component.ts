import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Usuario o Contraseña incorrectos!',
              confirmButtonColor: '#00c4a7'
            })
          }
      });
      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, complete ambos campos',
        confirmButtonColor: '#00c4a7'
      })
    }
    
  }

}
