import { Component, OnInit } from '@angular/core';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';
import { MaterialService } from 'src/app/Service/material.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  materials:any;
  constructor(private sharedservice:SharedMethodService,private mterialService:MaterialService,private auth:AuthService) { 
    auth.logOut();
  }

  ngOnInit() {
    this.mterialService.getList().subscribe(
      (data:any)=>{this.materials = data;console.log(data)}
    )
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }
}
