import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Service/category.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
category:Category ={
  name:""
}
  constructor(private categoryService:CategoryService,private sharedSevice:SharedMethodService) { }

  ngOnInit() {
  }

  addCategory(){
    this.categoryService.addCategory(this.category).subscribe(
      ()=>{
        this.sharedSevice.navigate("/home/categories")
      }
    )
  }
}
