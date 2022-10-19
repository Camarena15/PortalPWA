import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
  ){
    
  }
  canActivate():boolean{
    return true;
  }

  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(!localStorage.getItem('token')){
      return false;
    }
    return true;
  }
  
}
