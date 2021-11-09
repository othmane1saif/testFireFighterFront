import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './helpers/auth.guard';
import {AdminComponent} from './admin/admin.component';
import {Role} from './models/user';
import {LoginComponent} from './login/login.component';
import {CongeUserComponent} from './conge-user/conge-user.component';
import {CongeAdminComponent} from './conge-admin/conge-admin.component';


const routes: Routes = [   {
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.USER] }
},
  {path: 'congeUser',
  component: CongeUserComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.USER] }
},
  {path: 'congeAdmin',
    component: CongeAdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] }
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] }
  },
  {
    path: 'login',
    component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
