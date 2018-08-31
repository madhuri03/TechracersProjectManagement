import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { dashboardRouting } from './dashboard.routing';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    dashboardRouting,
    SharedModule
  ],
  exports: [DashboardComponent],
  entryComponents: [DashboardComponent]
})

export class DashboardModule { }
