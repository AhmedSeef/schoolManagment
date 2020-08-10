import { Component, OnInit } from '@angular/core';
import { ExamsService } from 'src/app/Service/exams.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
model:any = {};
  constructor(private examService:ExamsService,private sharedservice:SharedMethodService,private auth:AuthService) { 
    auth.logOut();
  }

  ngOnInit() {
  }

  addExam(){
    this.examService.addExam(this.model).subscribe(
      ()=>{alert("added success");this.sharedservice.navigate("home/exams")}
    )
  }
}
