import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  { path: 'confirm/:emailVerified', 
    component:ConfirmAccountComponent
  }, 
  {
    path: 'recover-pass',
    component: RecoverPasswordComponent
  },
  {
    path: 'change-pass/:tokenPassword',
    component: ChangePasswordComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
