import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/Service/user-list.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users:any;
  userObserver = {
    next: (data: any) => this.getusers(),
    error: (err: string) => console.error('Observer got an error: ' + err),
    complete: () => { },
  };

  constructor(private userList:UserListService,private sharedservice:SharedMethodService) { }

  ngOnInit() {
         this.getusers();
  }

  getusers(){
    this.userList.getAllUsers().subscribe(
      (data:any)=>{this.users = data}
    ); 
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }

  remove(id:number){
    this.userList.removeUser(Number(id)).subscribe(this.userObserver)
  }

  update(user:any){
    var data = JSON.stringify(user);        
    window.localStorage.setItem("userDataupdate",data); 
    this.sharedservice.navigate("home/UpdateUser");
  }
}
