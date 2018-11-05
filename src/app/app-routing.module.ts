import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { AdminProductComponent } from './component/admin/admin-product/admin-product.component';
import { AdminOrdersComponent } from './component/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './component/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component:ProductComponent },
  { path: 'login', component:LoginComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent,   canActivate: [AuthGuardService] },
  { path: 'check-out', component:CheckoutComponent,   canActivate: [AuthGuardService] },
  { path: 'order-success', component: OrderSuccessComponent,   canActivate: [AuthGuardService] },
  { path: 'my/orders', component: MyOrderComponent,   canActivate: [AuthGuardService] },
  { path: 'admin/products', component:AdminProductComponent,   canActivate: [AuthGuardService]  },
  { path: 'admin/orders', component: AdminOrdersComponent,   canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
