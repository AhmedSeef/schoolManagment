import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { SbjectService } from 'src/app/Service/sbject.service';
import { SatgesService } from 'src/app/Service/satges.service';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
  subject:Subject = {
    name:"",
    credit_hours:null,
    stage:0,
    category:0
  }
  satges:any;
  categories:any;

  satgesObserver = {
    next: (data: any) => this.satges = data,
    error: (err: string) => console.error('Observer got an error: ' + err),
    complete: () => { this.categoryService.getListCategories().subscribe(this.categoryObserver)},
  };

  categoryObserver = {
    next: (data: any) => this.categories = data,
    error: (err: string) => console.error('Observer got an error: ' + err),
    complete: () => { },
  };

  constructor(private subjectService:SbjectService,private stageService:SatgesService,private categoryService:CategoryService) { }

  ngOnInit() {
    this.stageService.getListStages().subscribe(this.satgesObserver)
  }

  setStage(stage:any){
    this.subject.stage = stage;
  }

  setcategory(cat:any){
    this.subject.category = cat;
  }

  addSubject(){
    this.subjectService.addSsubject(this.subject).subscribe(
      ()=>{}
    )
  }
}
