import { Component } from '@angular/core';
import { AuthService } from "../shared/auth.service";
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adminLogedIn: boolean = false;
  aliveSubscription: boolean = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.adminLogedIn  = this.authService.isLoggedIn();
    this.authService.loggedIn.pipe(takeWhile(() => this.aliveSubscription)).subscribe(() => this.adminLogedIn = true);
    this.authService.loggedOut.pipe(takeWhile(() => this.aliveSubscription)).subscribe(() => this.adminLogedIn = false);
  }

  ngOnDestroy() {
    this.aliveSubscription = false;
  }
}
