import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: Login = {
    username: '',
    password: '',
  };

  constructor(private userService: LoginService, private router: Router) {}

  submitRegister() {
    console.log(this.user);

    if (this.user.username === '' || this.user.password === '') {
      alert('Ingrese un correo o contraseña ');
      return;
    }

    this.userService.userRegister(this.user).subscribe({
      next: (res: any) => {
        if (res) {
          alert('Usuario registrado');
          window.location.href = '/';
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
