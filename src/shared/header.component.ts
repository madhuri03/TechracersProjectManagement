import { Component, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthService } from "./auth.service";
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
      <a class="navbar-brand" [routerLink]="['/']">Techracers</a>

      <button  *ngIf="adminLogedIn" class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
        <i class="fa fa-bars"></i>
      </button>

      <!-- Navbar -->
      <ul *ngIf="adminLogedIn" class="navbar-nav w-100">
        <li class="nav-item ml-auto" dropdown>
          <a class="nav-link dropdown-toggle" dropdownToggle id="userDropdown">
            <i class="fa fa-user-circle fa-fw"></i>
          </a>
          <ul id="dropdown-basic" *dropdownMenu class="dropdown-menu dropdown-menu-right"
              role="menu" aria-labelledby="button-basic">
            <li role="menuitem"><a class="dropdown-item">profile</a></li>
            <li class="divider dropdown-divider"></li>
            <li role="menuitem"><a class="dropdown-item" (click)="openModal(confirmLogoutModal)">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Logout Modal-->
    <ng-template #confirmLogoutModal>
      <div class="modal-header">
        <h4 class="modal-title pull-left">Ready to Leave?</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Select "Logout" below if you are ready to end your current session
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" (click)="modalRef.hide()">Cancel</button>
        <a class="btn btn-primary" (click)="logout()">Logout</a>
      </div>
    </ng-template>
  `
})

export class HeaderComponent {
  modalRef: BsModalRef;
  adminLogedIn: boolean = false;
  aliveSubscription: boolean = true;

  constructor(private authService: AuthService, private modalService: BsModalService) { }

  ngOnInit() {
    this.adminLogedIn  = this.authService.isLoggedIn();
    this.authService.loggedIn.pipe(takeWhile(() => this.aliveSubscription)).subscribe(() => this.adminLogedIn = true);
    this.authService.loggedOut.pipe(takeWhile(() => this.aliveSubscription)).subscribe(() => this.adminLogedIn = false);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  logout(id) {
    this.modalRef.hide();
    this.authService.logOut().pipe(takeWhile(() => this.aliveSubscription))
      .subscribe(
        (data:any) => {
          console.log('logout message', data);
        },
        (err) => {
         console.log('logout error', err)
        }
      );
  }

  ngOnDestroy() {
    this.aliveSubscription = false;
  }

}
