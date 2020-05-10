import { Component, OnInit } from '@angular/core';
import { SbjectService } from 'src/app/Service/sbject.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects:any;
  constructor(private subjectService:SbjectService,private sharedservice:SharedMethodService) { }

  ngOnInit() {
    this.subjectService.getListSubjects().subscribe(
      (data:any)=>{this.subjects = data}
    )
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }
}
