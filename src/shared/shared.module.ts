import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  exports: [ModalModule],
  imports: [ModalModule.forRoot()]
})

export class SharedModule { }
