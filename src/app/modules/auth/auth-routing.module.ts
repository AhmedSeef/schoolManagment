import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {path: '/home/register', component: RegisterComponent},
  {
    path: '', component: AuthComponent, children: [
      {path: '', component: LoginComponent}     
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
