import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  isLoggedInUser:boolean= false;

  constructor(private router: Router) {
    this.setLoggedIn();
  }

  login() {
    localStorage.setItem('logIn', JSON.stringify(true));
    this.setLoggedIn();
  }

  setLoggedIn() {
    let loggedIn = localStorage.getItem('logIn') == 'true' ? true : false;
    this.isLoggedInUser = loggedIn;
  }

  isLoggedIn() {
    return this.isLoggedInUser;
  }

  logOut() {
    localStorage.setItem('logIn', JSON.stringify(false));
    this.setLoggedIn();
    this.router.navigate(['']);
  }
}
