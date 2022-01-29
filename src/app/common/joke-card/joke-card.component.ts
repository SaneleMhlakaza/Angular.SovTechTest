import { Component, Input, OnInit } from '@angular/core';
import { RandomJoke } from 'src/app/shared/models/chuck/random-joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.css']
})
export class JokeCardComponent implements OnInit {
  @Input() joke: any={icon_url:''};
  constructor() { }

  ngOnInit(): void {
  }

}
