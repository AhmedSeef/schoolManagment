import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserListService } from 'src/app/Service/user-list.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit,OnDestroy {
  user:any= {};
  type:any;

  constructor(private userl:UserListService) { 
    var data  = localStorage.getItem("userDataupdate");
    this.user = JSON.parse(data);
    this.getval();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    localStorage.removeItem("userDataupdate");
  }

  selected(value:any){
    if(value == 1)
    this.type= "ADM";
  
    if(value == 2)
    this.type = "STD";
   
    if(value == 3)
    this.type = "PAR";
    
    if(value == 4)
    this.type = "TECH";
}

getval(){
  if(this.user.user_type == "ADM")
    this.user.user_type = 1;
  
    if(this.user.user_type == "STD")
    this.user.user_type = 2;
   
    if(this.user.user_type == "PAR")
    this.user.user_type = 3;
    
    if(this.user.user_type == "TECH")
    this.user.user_type = 4;
}

update(){
  this.selected(this.user.user_type)
  this.user.user_type = this.type;
  console.log(this.user)
  this.userl.updateUser(this.user).subscribe()
}

}
