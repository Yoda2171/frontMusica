import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }


  BASE_URL= 'http://localhost:3000'


  userLogin(user: Login){
    return this.http.post<Login>(`${this.BASE_URL}/auth/login`, user)
  }

  userRegister(user: Login){
    return this.http.post<Login>(`${this.BASE_URL}/auth/register`, user)
  }
}
