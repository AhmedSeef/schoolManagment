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

  materialObserver = {
    next: (data: any) => this.getMaterials(),
    error: (err: string) => console.error('Observer got an error: ' + err),
    complete: () => {this.materials.splice(this.materials.indexOf(this.matrialId), 1); },
  };

  materials:any;
  matrialId;
  constructor(private sharedservice:SharedMethodService,private mterialService:MaterialService,private auth:AuthService) { 
    auth.logOut();
  }

  ngOnInit() {
    this.getMaterials();
  }
  getMaterials(){
    this.mterialService.getList().subscribe(
      (data:any)=>{this.materials = data;console.log(data)}
    )
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }

  remove(id:Number){
    this.matrialId = id;
    this.mterialService.remove(id).subscribe(
      this.materialObserver
    )
  }
}
