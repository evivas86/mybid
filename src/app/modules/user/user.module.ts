import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MeComponent } from './components/me/me.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule,
    MatPasswordStrengthModule,
    MatSlideToggleModule

  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    RecoveryComponent,
    ResetPasswordComponent,
    MeComponent
    
  ]
})
export class UserModule { }
