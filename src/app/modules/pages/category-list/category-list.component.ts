import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories:any;
  constructor(private categoryservice:CategoryService,private sharedservice:SharedMethodService,private auth:AuthService) { 
    auth.logOut();
    var result =this.auth.getusertype();
    if(result!='ADM'){
      this.sharedservice.navigate("home")           
   }
  }

  ngOnInit() {
    this.categoryservice.getListCategories().subscribe(
      (data:any)=>{this.categories = data}
    )
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }

}
