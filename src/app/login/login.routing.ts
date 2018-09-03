import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

const loginRoutes: Routes = [
  {path: '', component: LoginComponent}
];

export const loginRouting = RouterModule.forChild(loginRoutes);

