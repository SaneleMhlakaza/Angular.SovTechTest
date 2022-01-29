import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { RandomJoke } from 'src/app/shared/models/chuck/random-joke.model';
import { Person } from 'src/app/shared/models/swapi/person.model';
import { SovtechService } from 'src/app/shared/services/sovtech.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  subscriber=true;
  swapipeople:Person[];
  constructor(public service: SovtechService) { }

  ngOnInit(): void {
    this.getSwapiPeople();
  }

  getSwapiPeople(){
    this.service.getSwapiPeople().pipe(takeWhile(()=> this.subscriber))
                                    .subscribe(people => {
                                      this.swapipeople=people;
                                    });
  }

}
