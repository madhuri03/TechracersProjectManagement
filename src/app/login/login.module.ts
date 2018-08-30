import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component'

const loginRoutes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [RouterModule, LoginComponent],
  entryComponents: [LoginComponent]
})

export class LoginModule { }
