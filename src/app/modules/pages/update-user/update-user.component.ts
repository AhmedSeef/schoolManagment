import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserListService } from 'src/app/Service/user-list.service';
import { UserAdd } from 'src/app/models/user-add';
import { DatePipe } from '@angular/common';
import { CategoryService } from 'src/app/Service/category.service';
import { SatgesService } from 'src/app/Service/satges.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit,OnDestroy {
  user:UserAdd= {
    username:"",
    first_name:"",
    last_name:"",
    user_type:"",
    email:"",
    password:"",
    phone:"",
    birth_date: null,
   
    job:"",
    stage:null,
    category:null,
    hire_date:null,
    adress:""
  };
  type:any;
  categories:any;
  stages:any;
  studentHidden:boolean = true;
  teacherHidden:boolean = true;
  parentHidden:boolean=true;

  getcategories(){
    this.ctegorService.getListCategories().subscribe(
      (data:any)=>{this.categories = data}
    )
  }

  getStages(){
    this.stageService.getListStages().subscribe(
      (data:any)=>{this.stages = data}
    )
  }


   
   
  
  constructor(private userl:UserListService, private datePipe: DatePipe,private ctegorService:CategoryService,private stageService:SatgesService,private shareS:SharedMethodService) { 
    var data  = localStorage.getItem("userDataupdate");
    this.user = JSON.parse(data);
    this.getval();
    this.selected(this.user.user_type)
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    localStorage.removeItem("userDataupdate");
  }

  //slect user type and maping values
  selected(value:any){
    if(value == 1)
    {
      this.type= "ADM";
      this.studentHidden = this.parentHidden  = this.teacherHidden= true;
    }
  
    if(value == 2)
    {
      this.type = "STD";
      this.studentHidden = false;
      this.parentHidden  = this.teacherHidden= true;
      this.user.stage = 0;
        this.getStages();
    }
   
    if(value == 3)
    {
      this.type = "PAR";
      this.parentHidden = false;
      this.studentHidden = this.teacherHidden=  true;
    }
    
    if(value == 4)
    {
      this.type = "TECH";
      this.teacherHidden = false;
      this.studentHidden = this.parentHidden  = true;
      this.user.category = 0;
        this.getcategories();
    }
    
}

slectSatge(stage:Number){
 
}

 getval(){
   if(this.user.user_type == "ADM")
     this.user.user_type = "1";
  
     if(this.user.user_type == "STD")
     this.user.user_type = "2";
   
     if(this.user.user_type == "PAR")
     this.user.user_type = "3";
    
     if(this.user.user_type == "TECH")
     this.user.user_type = "4";
 }

update(){
  this.selected(this.user.user_type)
  this.user.user_type = this.type;
  console.log(this.user)
  this.userl.updateUser(this.user).subscribe()
}

}
