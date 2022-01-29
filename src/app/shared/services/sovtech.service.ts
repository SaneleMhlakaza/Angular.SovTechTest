import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SovtechService {
  private apiUrl= environment.apiUrl;
  private options: HttpHeaders;

  constructor(private http:HttpClient) {
    this.options=new HttpHeaders();
    this.options =this.options.append("Content-Type","application/json");
    this.options =this.options.append("Access-Control-Allow-Origin","*");
    this.options =this.options.append("Access-Control-Allow-Methods","*");
    this.options =this.options.append("Access-Control-Allow-Headers","*");

   }

  public getChuckCategories():Observable<any>{
    return this.http.get(this.apiUrl+'/chuck/categories');
  }

  public getChuckJoke(category:string):Observable<any>{
    return this.http.get(this.apiUrl+ '/chuck/categories/'+category, {headers: this.options});
  }

  public getSwapiPeople():Observable<any>{
    return this.http.get(this.apiUrl+ '/swapi/people/', {headers: this.options});
  }

  public getSearchResults(searchword:string):Observable<any>{
    return this.http.get(this.apiUrl+ '/search/'+ searchword, {headers: this.options});
  }
}
