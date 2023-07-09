import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './compnents/admin/dashboard/dashboard.component';

const routes: Routes = [
    //admin panel
    {path: 'dashboard',
    component: DashboardComponent,
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
