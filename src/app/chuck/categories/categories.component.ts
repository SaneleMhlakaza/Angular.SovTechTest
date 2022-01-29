import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { RandomJoke } from 'src/app/shared/models/chuck/random-joke.model';
import { SovtechService } from 'src/app/shared/services/sovtech.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  subscriber=true;
  categories:any[] =[];
  chuckJoke:RandomJoke;
  constructor(public service: SovtechService,private route:Router) { }

  ngOnInit(): void {
    console.log("test")
    this.getCategories();
    console.log("test")
  }
  onCategoryClicked(category:string){
    this.getChuckJoke(category);

    console.log(this.chuckJoke);
  }

  getCategories(){
    this.service.getChuckCategories().pipe(takeWhile(()=> this.subscriber))
                                    .subscribe(cat => {
                                      this.categories=cat;
                                    });
  }

  getChuckJoke(category:string){
    this.service.getChuckJoke(category).pipe(takeWhile(()=> this.subscriber))
                                    .subscribe(joke => {
                                      this.chuckJoke=joke;
                                    });
  }

}
