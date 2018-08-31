import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: '**', redirectTo: '/login'}
];

export const appRouting = RouterModule.forRoot(appRoutes, { enableTracing: true })
