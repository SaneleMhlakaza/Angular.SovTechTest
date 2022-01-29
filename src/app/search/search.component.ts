import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { SearchResult } from '../shared/models/search/search-result.model';
import { SovtechService } from '../shared/services/sovtech.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  subscriber=true;
  search_results:SearchResult={
    results: []
  };
  search_result_source="";
  searchword: any="";
  constructor(public service: SovtechService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  
    this.search_result_source="api.chucknorris.io";
    this.route.paramMap.subscribe(params=>{
      this.searchword=params.get('searchword')?.toString();
      
    });
    this.getSearchResults(this.searchword);
    this.router.navigate(['.'], { relativeTo: this.route } ); 
    
  }

  getSearchResults(searchword:string){
    this.service.getSearchResults(searchword).pipe(takeWhile(()=> this.subscriber))
                                    .subscribe(results => {
                                      this.search_results=results;
                                    });
  }

}
