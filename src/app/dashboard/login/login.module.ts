import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ThemeModule,LoginRoutingModule,ReactiveFormsModule,
      FormsModule],
  declarations: [LoginComponent],
  providers: [],


})
export class LoginModule {}
