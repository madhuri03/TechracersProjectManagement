import { Component, TemplateRef } from '@angular/core';
import { AuthService } from "../../shared/auth.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  modalRef: BsModalRef;

  constructor(private authService: AuthService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  logout(id) {
    this.modalRef.hide();
    this.authService.logOut();
  }

}
