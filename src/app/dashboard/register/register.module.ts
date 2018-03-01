import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
      ThemeModule,
      RegisterRoutingModule,
      ReactiveFormsModule,
      FormsModule
  ],
  declarations: [RegisterComponent],
  providers: []
})
export class RegisterModule {}
