import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { loginRouting } from './login.routing';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    loginRouting,
    SharedModule
  ],
  exports: [LoginComponent],
  entryComponents: [LoginComponent]
})

export class LoginModule { }
