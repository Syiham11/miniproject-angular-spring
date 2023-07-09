import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './compnents/template/sidebar/sidebar.component';
import { HeaderComponent } from './compnents/template/header/header.component';
import { FooterComponent } from './compnents/template/footer/footer.component';
import { DashboardComponent } from './compnents/admin/dashboard/dashboard.component';
import { ProductListComponent } from './compnents/admin/product-list/product-list.component';
import { TransactionListComponent } from './compnents/admin/transaction-list/transaction-list.component';
import { UserListComponent } from './compnents/admin/user-list/user-list.component';
import { NotFoundComponent } from './compnents/error/not-found/not-found.component';
import { UnathorizedComponent } from './compnents/error/unathorized/unathorized.component';
import { LoginComponent } from './compnents/user/login/login.component';
import { DetailProductComponent } from './compnents/user/detail-product/detail-product.component';
import { HomeComponent } from './compnents/user/home/home.component';
import { ProfileComponent } from './compnents/user/profile/profile.component';
import { RegisterComponent } from './compnents/user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ProductListComponent,
    TransactionListComponent,
    UserListComponent,
    NotFoundComponent,
    UnathorizedComponent,
    LoginComponent,
    DetailProductComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
