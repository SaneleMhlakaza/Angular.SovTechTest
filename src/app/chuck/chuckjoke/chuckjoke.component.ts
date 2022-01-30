import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { RandomJoke } from 'src/app/shared/models/chuck/random-joke.model';
import { SovtechService } from 'src/app/shared/services/sovtech.service';

@Component({
  selector: 'app-chuckjoke',
  templateUrl: './chuckjoke.component.html',
  styleUrls: ['./chuckjoke.component.css']
})
export class ChuckjokeComponent implements OnInit {
  joke:RandomJoke;
  category: any;
  subscriber=true;
  constructor(public service: SovtechService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.category=params.get('category');
    });
    this.getChuckJoke(this.category);
    
  }

  getChuckJoke(category:string){
    this.service.getChuckJoke(category).pipe(takeWhile(()=> this.subscriber))
                                    .subscribe(jok => {
                                      this.joke=jok;
                                      console.log(this.joke);
                                    });
  }

}
