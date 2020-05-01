import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/Service/user-list.service';
import { UserAdd } from 'src/app/models/user-add';
import { DatePipe } from '@angular/common';


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
    user_type:"",
    email:"",
    password:"",
    phone:"",
    birth_date: null,
    picture:"",
    job:"",
    stage:null,
    category:null,
    hire_date:null,
    adress:""
  };
  type:any;
  studentHidden:boolean = true;
  teacherHidden:boolean = true;
  parentHidden:boolean=true;

  constructor(private userl:UserListService, private datePipe: DatePipe) { 
   
  }

  ngOnInit() {
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
      }
      
  }

  slectSatge(stage:Number){
   
  }

  register(){
    this.user.user_type = this.type;
    
    var date = this.user.birth_date;
   console.log(this.datePipe.transform(date,"yyyy-MM-dd")); 
    this.userl.registerUser(this.user).subscribe(
        (resposnse:any)=>{console.log(resposnse);this.user.user_type = "0";}
      )
    console.log(this.user)
  }

  

}
