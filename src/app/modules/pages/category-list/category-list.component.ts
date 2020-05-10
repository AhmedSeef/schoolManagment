import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories:any;
  constructor(private categoryservice:CategoryService,private sharedservice:SharedMethodService) { }

  ngOnInit() {
    this.categoryservice.getListCategories().subscribe(
      (data:any)=>{this.categories = data}
    )
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }

}
