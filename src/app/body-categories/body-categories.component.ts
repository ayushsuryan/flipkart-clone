import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-categories',
  templateUrl: './body-categories.component.html',
  styleUrls: ['./body-categories.component.css']
})
export class BodyCategoriesComponent implements OnInit {

  constructor() { }

  productCategories : any;

  ngOnInit(): void {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(j => {
      this.productCategories = j;
    });
  }
  viewAll(item:any){
    console.log(item)
  }

}
