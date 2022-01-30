import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './chuck/categories/categories.component';
import { PeopleComponent } from './swapi/people/people.component';
import { SearchComponent } from './search/search.component';
import { JokeCardComponent } from './common/joke-card/joke-card.component';
import { NavigationBarComponent } from './common/nav-bar/navigation-bar/navigation-bar.component';
import { PeopleCardComponent } from './common/people-card/people-card.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import { ChuckjokeComponent } from './chuck/chuckjoke/chuckjoke.component';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes=[
  {path: 'categories/:category', component:ChuckjokeComponent },
  {path: 'categories', component:CategoriesComponent },
  {path: 'people', component:PeopleComponent },
  {path: 'search/:searchword', component:SearchComponent },
  {path: 'search', component:SearchComponent },
  {path:'', redirectTo: '/categories',pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PeopleComponent,
    SearchComponent,
    JokeCardComponent,
    NavigationBarComponent,
    PeopleCardComponent,
    ChuckjokeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
