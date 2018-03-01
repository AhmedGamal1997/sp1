import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component'

const peopleRoutes = [
  {
    path: '',
    component: PeopleComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(peopleRoutes)],
  exports: [RouterModule]
})

export class PeopleRoutingModule {}
