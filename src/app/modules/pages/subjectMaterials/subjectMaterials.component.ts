import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SbjectService } from 'src/app/Service/sbject.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-subjectMaterials',
  templateUrl: './subjectMaterials.component.html',
  styleUrls: ['./subjectMaterials.component.css']
})
export class SubjectMaterialsComponent implements OnInit {
  subjectId;
  materials:any[]=[];
  constructor(private router:ActivatedRoute,private subjectService:SbjectService,private auth:AuthService) { 
    auth.logOut();
  }

  ngOnInit() {
    this.subjectId = this.router.snapshot.params['id'];
    this.subjectService.getSubjectMAterial(2).subscribe(
      (data:any)=>{console.log(data)}
    )
  }

}
