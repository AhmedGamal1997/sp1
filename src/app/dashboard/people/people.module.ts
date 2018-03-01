import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleItemComponent } from './people-item/people-item.component';

@NgModule({
  imports: [ThemeModule,PeopleRoutingModule,ReactiveFormsModule,
      FormsModule],
  declarations: [PeopleComponent, PeopleItemComponent],
  providers: [],


})
export class PeopleModule {}
