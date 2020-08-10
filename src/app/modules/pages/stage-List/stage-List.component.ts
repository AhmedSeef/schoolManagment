import { Component, OnInit } from '@angular/core';
import { SatgesService } from 'src/app/Service/satges.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-stage-List',
  templateUrl: './stage-List.component.html',
  styleUrls: ['./stage-List.component.css']
})
export class StageListComponent implements OnInit {
  stages:any;

  constructor(private stageService:SatgesService,private sharedservice:SharedMethodService,private auth:AuthService) { 
    
    var result =this.auth.getusertype();
     if(result!='ADM'){
       this.sharedservice.navigate("home")           
    }
  }

  ngOnInit() {
    this.stageService.getListStages().subscribe(
      (data:any)=>{this.stages = data}
    )
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }

}
