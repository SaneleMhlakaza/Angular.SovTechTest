import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSearchSubmit(){
    console.log(this.searchword.value);
    
  }
  onSubmit(): void {
    console.log(this.searchword.value); 
    this.router.navigate(['/search/'+this.searchword.value])
  }

  form = new FormGroup({
    searchword: new FormControl('', Validators.minLength(1)),
  });

  get searchword(): any {
    return this.form.get('searchword');
  }

}
