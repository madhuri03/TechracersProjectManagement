import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../../shared/auth.service";
import { Router } from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {takeWhile} from 'rxjs/operators'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm:FormGroup;
  private aliveSubscription:boolean = true;
  submitted: boolean = false;
  invalidAdmin = false;

  constructor(private authService: AuthService, private router: Router) {
     if(this.authService.isLoggedIn()) {
       router.navigate(['dashboard']);
     }
  }

  ngOnInit() {
    let savedUser = "";
    let rememberMe = false;
    if (this.authService.getRememberedUser()) {
      savedUser = this.authService.getRememberedUser();
      rememberMe = true;
    }
    this.loginForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(savedUser, Validators.required),
        'password': new FormControl('', Validators.required)
      }),
      'rememberMe': new FormControl(rememberMe)
    });
  }

  login() {
    this.submitted = true;
    this.invalidAdmin = false;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.userData).pipe(takeWhile(() => this.aliveSubscription))
        .subscribe(
          (data:any) => {
            console.log('successful login');
            this.submitted = false;
            this.router.navigate(['dashboard']);
          },
          (err) => {
            this.invalidAdmin = true;
            console.log('Wrong user credential', err);
          }
        );
    }
  }

  ngOnDestroy() {
    this.aliveSubscription = false;
  }

}
