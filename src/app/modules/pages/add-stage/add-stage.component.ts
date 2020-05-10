import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { SatgesService } from 'src/app/Service/satges.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {

  stage:Category = {
    name:""
  }
  constructor(private satgeService:SatgesService,private sharedSevice:SharedMethodService) { }

  ngOnInit() {
  }

  addStage(){
    this.satgeService.addStage(this.stage).subscribe(
      ()=>{ this.sharedSevice.navigate("/home/stages")}
    )
  }
}
