import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur: number = 0;

  constructor(
    private router: Router,
    private authService: LoginService,

  ) { }

  ngOnInit(): void {

  }

  // onLoggedin() {
  //   console.log(this.user);
  //   let isValidUser: Boolean = this.authService.SignIn(this.user);

  //   if (isValidUser)
  //     this.router.navigate(['/']);
  //   else
  //     alert("Login Or PassWord Not Correct");
  //   this.erreur = 1;
  //   console.log(this.authService.isAdmin)

  // }
  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {

        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/professeur']);
        console.log("user is loged in");

      },
      error: (erreur: any) => { this.erreur = 1; }

    });


  }

  onRegister()
  {
    this.router.navigate(['/register']);

  console.log('"register active');
  }
}
