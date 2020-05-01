import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/Service/user-list.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user:any= {};
  type:any;
  studentHidden:boolean = true;
  teacherHidden:boolean = true;
  parentHidden:boolean=true;

  constructor(private userl:UserListService) { 
    this.user.user_type = 0;
  }

  ngOnInit() {
  }

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

  register(){
    /*this.user.user_type = this.type;
    this.userl.registerUser(this.user).subscribe(
      (resposnse:any)=>{this.user = {};this.user.user_type = 0;}
    )*/
    console.log(this.user)
  }

  

}
