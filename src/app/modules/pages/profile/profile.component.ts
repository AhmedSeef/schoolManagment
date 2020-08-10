import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { SbjectService } from 'src/app/Service/sbject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  subjects:any;
  constructor(private auth:AuthService,private subjectService:SbjectService) { 
    auth.logOut();
    subjectService.getUserSubjects(1).subscribe(
      (data:any)=>{this.subjects = data}
    )
  }

  ngOnInit() {
  }

  addMaterials(id){
    alert("Added"+id)
  }

  getMaterials(id){
    alert("get"+id)
  }
}
