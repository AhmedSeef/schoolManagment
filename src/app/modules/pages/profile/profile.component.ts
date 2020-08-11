import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { SbjectService } from 'src/app/Service/sbject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:any = {};
  subjects:any;
  constructor(private auth:AuthService,private subjectService:SbjectService) { 
    this.userId = auth.getUserId();   
    auth.logOut();
    subjectService.getUserSubjects(this.userId).subscribe(
      (data:any)=>{this.subjects = data}
    )
  }

  ngOnInit() {
  }

  
  checkRule(rule:any){
    if(this.auth.getusertype()==rule){
      return true;
    }
  }
}
