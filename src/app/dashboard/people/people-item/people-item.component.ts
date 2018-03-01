import { Component, OnInit, Input } from '@angular/core';
import { Person } from  '../person.model';
@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.scss']
})
export class PeopleItemComponent implements OnInit {

  @Input('currentPerson') person;

  constructor() { }

  ngOnInit() {
  }

}
