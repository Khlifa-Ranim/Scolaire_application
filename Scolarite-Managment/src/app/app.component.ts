import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginService } from './login/login.service';
import { User } from './login/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Scolarite-Managment';
  isProfesseursMenuOpen: boolean = false;
  user = new User();
  erreur = 0;

  constructor(
    private router: Router,
    public authService: LoginService,

  ) { }



  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);

    if (isValidUser)
      this.router.navigate(['/professeur']);
    else
      alert("Login Or PassWord Not Correct");
    this.erreur = 1;
  }
  onLogout() {
    this.authService.logout();
    console.log("user is logged out");


  }
  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
   
    this.authService.loadToken() == null ||
      this.authService.isTokenExpired();

  }


}


