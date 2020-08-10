import { Component, OnInit } from '@angular/core';
import { ExamsService } from 'src/app/Service/exams.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  exam: any = {};
  questions:any[] =[];
  model:any={};
  questionList:any[]= [];
  constructor(private examservice:ExamsService,private auth:AuthService) {
    auth.logOut();
  this.exam = JSON.parse(localStorage.getItem('examdata'))
  
  }

  ngOnInit() {
    this.examservice.getExamQuestions(1).subscribe(
      (data:any)=>{this.questions=data.data;console.log(this.questions)}
    )
  }

  addQuestion(){
    this.model.mark = this.model.mark.toString();
    this.questionList.push(this.model)
   this.examservice.addQuestions(this.exam.id,this.questionList).subscribe(
     ()=>{alert("done");
    this.questions.push(this.model)}
   )
  }

}
