import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { SignupComponent } from "./signup/signup.component";
import { RecoverPasswordComponent } from "./recover-password/recover-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';

@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
    RecoverPasswordComponent,
    ChangePasswordComponent,
    ConfirmAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    AuthRoutingModule,
    MatBadgeModule,
    MatDialogModule,
  ],
})
export class AuthModule {}
