import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private JwtHelper: JwtHelperService
  ){
    
  }
  canActivate():boolean{
    if(!this.isAuth()){
      console.log("Token no es válido o ya expiró")
      return false;
    }
    return true;
  }

  isAuth():boolean{
    const token = localStorage.getItem('token') ?? '';
    if(this.JwtHelper.isTokenExpired(token) || !localStorage.getItem('token') || token==''){
      return false;
    }
    return true;
  }
  
}
