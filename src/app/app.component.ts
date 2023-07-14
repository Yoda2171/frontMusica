import { AfterViewInit, Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{

  constructor(
    private router : Router
  ){}
  
  ngAfterViewInit() {
  
    this.checkLogin();  
  }
  title = 'musica';
  login : boolean = false;



  logout() {
    localStorage.removeItem('user');
    window.location.href = '';

  }

  checkLogin() {

    if(!localStorage.getItem('user')){
      this.login = false;
      this.router.navigate(['']);
      
    }
    else{
      this.login = true;
    } 
    
  }

}
