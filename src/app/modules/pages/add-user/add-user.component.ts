import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/Service/user-list.service';
import { UserAdd } from 'src/app/models/user-add';
import { DatePipe } from '@angular/common';
import { CategoryService } from 'src/app/Service/category.service';
import { SatgesService } from 'src/app/Service/satges.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user:UserAdd= {
    username:"",
    first_name:"",
    last_name:"",
    user_type:"0",
    email:"",
    password:"",
    phone:"",
    birth_date: null,    
    job:"",
    stage:null,
    category:null,
    hire_date:null,
    address:""
  };
  type:any;
  categories:any;
  stages:any;
  studentHidden:boolean = true;
  teacherHidden:boolean = true;
  parentHidden:boolean=true;

  constructor(private userl:UserListService, private datePipe: DatePipe,private ctegorService:CategoryService,private stageService:SatgesService,private shareS:SharedMethodService,private auth:AuthService) { 
    auth.logOut();
    var result =this.auth.getusertype();
    if(result!='ADM'){
      this.shareS.navigate("home")           
   }
  }

  ngOnInit() {
    
  }

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
      
      console.log(this.type)
  }

  setcategory(cat:Number){
   this.user.category = Number(cat)
  }

  register(){
    console.log(this.user)
    this.user.user_type = this.type;    
    var date = this.user.birth_date;
   var date1 = this.datePipe.transform(date,"yyyy-MM-dd"); 
    this.userl.registerUser(this.user).subscribe(
        (resposnse:any)=>{console.log(resposnse);this.user.user_type = "0";this.shareS.navigate("/home/users")}
      )
    
  }

  

}
