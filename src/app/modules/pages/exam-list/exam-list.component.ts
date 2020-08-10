import { Component, OnInit } from '@angular/core';
import { ExamsService } from 'src/app/Service/exams.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
  exams:any[];
  constructor(private examservice:ExamsService,private sharedservice:SharedMethodService,private auth:AuthService) {
    auth.logOut();
   }

  ngOnInit() {
    this.examservice.getAllExam().subscribe(
      (data:any)=>{this.exams = data}
    )
  }

  get(url){
    this.sharedservice.navigate(url);
    
  }

  select(exam){    
    localStorage.setItem('examdata', JSON.stringify(exam));
    this.sharedservice.navigate('/home/addquestion')
  }
}
