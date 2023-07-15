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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderUserComponent } from './compnents/template/header-user/header-user.component';

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
    HeaderUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
