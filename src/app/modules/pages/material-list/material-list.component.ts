import { Component, OnInit } from '@angular/core';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';
import { MaterialService } from 'src/app/Service/material.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  materials:any;
  constructor(private sharedservice:SharedMethodService,private mterialService:MaterialService) { }

  ngOnInit() {
    this.mterialService.getList().subscribe(
      (data:any)=>{this.materials = data}
    )
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }
}
