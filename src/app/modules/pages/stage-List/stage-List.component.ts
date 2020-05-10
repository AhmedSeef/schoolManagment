import { Component, OnInit } from '@angular/core';
import { SatgesService } from 'src/app/Service/satges.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';

@Component({
  selector: 'app-stage-List',
  templateUrl: './stage-List.component.html',
  styleUrls: ['./stage-List.component.css']
})
export class StageListComponent implements OnInit {
  stages:any;

  constructor(private stageService:SatgesService,private sharedservice:SharedMethodService) { }

  ngOnInit() {
    this.stageService.getListStages().subscribe(
      (data:any)=>{this.stages = data}
    )
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }

}
