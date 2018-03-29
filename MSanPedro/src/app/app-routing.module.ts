import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// rutas
import { AppComponent } from './app.component'

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
