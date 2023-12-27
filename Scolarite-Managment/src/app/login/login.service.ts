import { Injectable } from '@angular/core';
import { User } from './User.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private helper = new JwtHelperService();

  private apiServerUrl = environment.apiBaseLoginUrl;
  public token!: string;

  // users: User[] = [{ "username": "admin", "password": "123", "roles": ['ADMIN'] },
  // { "username": "ranim", "password": "123", "roles": ['USER'] }]
  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  constructor(private router: Router,
    private http: HttpClient) { }
  login(user: User) {
    return this.http.post<User>(this.apiServerUrl + '/users/login', user, { observe: 'response' });
  }

  Register(user: User) {
    return this.http.post<User>(this.apiServerUrl + '/users/register', user, { observe: 'response' })
  }
  saveToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT();

  }

  decodeJWT() {
    if (this.token == undefined)
      return;
    const decodeToken = this.helper.decodeToken(this.token);
    this.roles = decodeToken.roles;
    this.loggedUser = decodeToken.sub;
  }
  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();
  }
  getToken(): string {
    return this.token;
  }

  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token = undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  isTokenExpired(): Boolean {
    console.log(this.token, "token expired")

    return this.helper.isTokenExpired(this.token);
  }
  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    // this.users.forEach((curUser) => {
    //   if (user.username == curUser.username && user.password == curUser.password) {
    //     validUser = true;
    //     this.loggedUser = curUser.username;
    //     this.isloggedIn = true;
    //     this.roles = curUser.roles;
    //     localStorage.setItem('loggedUser', this.loggedUser);
    //     localStorage.setItem('isloggedIn', String(this.isloggedIn));
    //   }
    // });

    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles)
      return false;
    return (this.roles.indexOf('ADMIN') >= 0)
  }

  isUser(): Boolean {
    if (!this.roles)
      return false;
    return (this.roles.indexOf('USER') >= 0)
  }

  // getUserRoles(username: string) {
  //   this.users.forEach((curUser) => {
  //     if (curUser.username == username) {
  //       this.roles = curUser.roles;
  //     }
  //   })
  // }
  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    // this.getUserRoles(login);
  }
}

