import { Injectable, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from "../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  isLoggedInUser:boolean= false;
  apiAuthUrl: string = "/login";
  public loggedOut = new EventEmitter<boolean>();
  public loggedIn = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) {
    this.setLoggedIn();
    this.apiAuthUrl = environment.apiUrl + '/api/v1';
  }

  login(user: any) {
    let params = new HttpParams();
    params = params.append("password", user.password);
    params = params.append("email", user.email);

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded')
    // headers = headers.append("Authorization", "Basic " + btoa(`${user.email}:${user.password}`));

    return this.http.post(this.apiAuthUrl + "/users/sign_in", params, {headers: headers})
    .map((response)=> {
      localStorage.setItem('logIn', JSON.stringify(true));
      localStorage.setItem('access_token', JSON.stringify(response['access_token']));
      this.setLoggedIn();
      this.loggedIn.emit();
      return response;
    },
    error => {
        return error.json();
    })

  }

  setLoggedIn() {
    let loggedIn = localStorage.getItem('logIn') == 'true' ? true : false;
    this.isLoggedInUser = loggedIn;
  }

  isLoggedIn() {
    return this.isLoggedInUser;
  }

  getToken() {
    return JSON.parse(localStorage.getItem(environment.token_name));
  }

  logOut() {
    localStorage.setItem('logIn', JSON.stringify(false));
    localStorage.removeItem('access_token');
    this.setLoggedIn();
    this.loggedOut.emit();
    this.router.navigate(['']);
    return this.http.get(this.apiAuthUrl + "/users/sign_out").map((response)=> {
      console.log(response)
      return response;
    },
    error => {
        return error.json();
    })
  }

  getRememberedUser() {
    let rememberedUsername = JSON.parse(localStorage.getItem("rememberMe"));
    if (rememberedUsername) {
      return rememberedUsername;
    }
  }

}
