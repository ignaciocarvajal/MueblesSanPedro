import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// rutas
import { CorouselComponent } from './components/corousel/corousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
	{path: '', component: CorouselComponent},
	{path: '', redirectTo: 'inicio', pathMatch: 'full'},
	{path: 'inicio', component: CorouselComponent},
	{path: 'servicios', component: ServicesComponent},
	{path: 'productos', component: ProductsComponent},
	{path: 'contacto', component: ContactComponent},
	{path: '**', component: CorouselComponent},


];

@NgModule({
	imports: [RouterModule.forRoot(routes,{ enableTracing: true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
