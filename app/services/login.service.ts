import { LoginResponse } from './../service-values';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  loggedIn = false;
  token = '';
  loginurl = 'api/loginRes';
  signupurl = 'api/signupRes';
  usernamecheckurl = 'api/usernameCheck';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const parameters = {
      username: username,
      password: password
    };
    this.http.get<LoginResponse>(this.loginurl).toPromise().then(
      (response) => {
        if (response.status) {
          this.loggedIn = true;
          this.token = response.token;
          window.location.pathname = '/chat';
        }
      }
    );
  }

  signup(firstname: string, lastname: string, username: string, password: string) {
    return this.http.get<boolean>(this.signupurl).toPromise();
  }

  checkUserName(username: string) {
    return this.http.get(this.usernamecheckurl).toPromise();
  }

}
