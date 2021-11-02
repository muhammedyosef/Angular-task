import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './authService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService) { }
  canActivate(){
    return this.authService.isAuthunticated();
  }
}
