import { UsersComponent } from './users/users.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsereditformComponent } from './usereditform/usereditform.component';

const routes: Routes = [
  {path:'', redirectTo:'/viewuser', pathMatch: 'full' },
  {path: 'viewuser', component: UsersComponent},
  {path : 'edit/:userid' , component: UsereditformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
