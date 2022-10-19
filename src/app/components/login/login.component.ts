import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtConfig, JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private JwtHelper: JwtHelperService,
    private router: Router
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token')
    
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
          if(data!="Invalid"){
              localStorage.setItem('token',data);
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
