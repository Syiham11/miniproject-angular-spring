import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './compnents/user/home/home.component';
import {LoginComponent} from './compnents/user/login/login.component';
import {RegisterComponent} from './compnents/user/register/register.component';
import {ProfileComponent} from './compnents/user/profile/profile.component';
import {DetailProductComponent} from './compnents/user/detail-product/detail-product.component';
import {DashboardComponent} from './compnents/admin/dashboard/dashboard.component';
import {UserListComponent} from './compnents/admin/user-list/user-list.component';
import {ProductListComponent} from './compnents/admin/product-list/product-list.component';
import {PromoListComponent} from './compnents/admin/promo-list/promo-list.component';
import {UnathorizedComponent} from './compnents/error/unathorized/unathorized.component';
import {NotFoundComponent} from './compnents/error/not-found/not-found.component';
import {TransactionListComponent} from './compnents/admin/transaction-list/transaction-list.component';
import {AuthGuard} from './guards/auth.guard';
import {Role} from './model/role';

const routes: Routes = [
  //Main page
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //User pages
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
  },
  {path: 'detail',  component: DetailProductComponent},
  {path: 'detail/:id', component: DetailProductComponent},

  //admin panel
  {path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path: 'user-list',
  component: UserListComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path: 'product-list',
  component: ProductListComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
 },
 {path: 'promo-list',
  component: PromoListComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
 },
 {path: 'transaction-list',
 component: TransactionListComponent,
 canActivate: [AuthGuard],
 data: {roles: [Role.ADMIN]}
},

  //error pages
  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnathorizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
constructor(private router: Router) {
  this.router.errorHandler = (error: any) => {
    this.router.navigate(['/404']);
  }
}
}
