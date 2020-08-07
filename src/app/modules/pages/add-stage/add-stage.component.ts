import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { SatgesService } from 'src/app/Service/satges.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {

  stage:Category = {
    name:""
  }
  constructor(private satgeService:SatgesService,private sharedSevice:SharedMethodService,private auth:AuthService) { 
    var result =this.auth.getusertype();
     if(result!='ADM'){
       this.sharedSevice.navigate("home")           
    }
  }

  ngOnInit() {
  }

  addStage(){
    this.satgeService.addStage(this.stage).subscribe(
      ()=>{ this.sharedSevice.navigate("/home/stages")}
    )
  }
}
