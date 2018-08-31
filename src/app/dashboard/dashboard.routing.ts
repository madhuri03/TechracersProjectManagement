import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from "../../shared/auth.guard";

const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]}
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);
