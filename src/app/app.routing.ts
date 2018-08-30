import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
