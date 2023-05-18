import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../interfaces/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  user:Login={
    username: '',
    password:  '',
  }

  constructor(
    private userService:LoginService,
    private router:Router,
  ){}


  submitLogin(){
    console.log(this.user);
    this.userService.userLogin(this.user)
    .subscribe(
      res => {
        
        console.log(res);
        
        this.router.navigate(['/products'])
      },
      err => console.log(err)
    )
  }
}
