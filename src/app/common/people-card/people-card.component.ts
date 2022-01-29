import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/swapi/person.model';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit {
  @Input() person: Person;
  constructor() { }

  ngOnInit(): void {
  }

}
