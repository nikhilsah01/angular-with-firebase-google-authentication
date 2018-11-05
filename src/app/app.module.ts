import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/Database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { AdminProductComponent } from './component/admin/admin-product/admin-product.component';
import { AdminOrdersComponent } from './component/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './component/login/login.component';
import {AuthServiceService} from './services/auth-service.service';
import {AuthGuardService} from './services/auth-guard.service';
import {UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'pkshop')
  ],
  providers: [AuthServiceService,AuthGuardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
