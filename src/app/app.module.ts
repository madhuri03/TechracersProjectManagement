import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthService } from "../shared/auth.service";
import { AuthGuard } from "../shared/auth.guard";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../core/auth.interceptor';

import { AppComponent } from './app.component';
import { HeaderComponent } from "../shared/header.component"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    appRouting,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
