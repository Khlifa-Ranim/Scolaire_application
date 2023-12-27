import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../User.model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String = '';
  email: String = '';
  password: String = '';

  public user = new User();
  confirmPassword?: string;
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: LoginService,
    private router: Router) { }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }



  public onRegister() {
    // const newUser: User = {
    //   username: this.username,
    //   email: this.email,
    //   password: this.password,
    // };

    console.log(this.user);
    this.authService.Register(this.user).subscribe({
      next: (res) => {

        this.router.navigate(['/login']);
        console.log("user is loged in");

      },

    });

   
  }

  public onLogin(){
    this.router.navigate(['/login']);

  }



}
