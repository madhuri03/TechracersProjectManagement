import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  exports: [
    ModalModule,
    BsDropdownModule,
    CommonModule,
    ReactiveFormsModule
  ],
  imports: [
    ModalModule,
    BsDropdownModule
  ]
})

export class SharedModule { }
