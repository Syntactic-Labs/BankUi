import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './home-misc/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HomeComponent } from './home-misc/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "users/list", pathMatch: "full" },

  { path: "home", component: HomeComponent },

  { path: "users/create", component: UserCreateComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/list", component: UserListComponent },
  { path: "users/login", component: UserLoginComponent },

  { path: "**", component: E404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
