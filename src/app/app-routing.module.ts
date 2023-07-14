import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProcesandopagoComponent } from './procesandopago/procesandopago.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'listproducts', component: ListproductComponent },
  {path:'procesandopago', component:ProcesandopagoComponent},
  {path:'register', component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
