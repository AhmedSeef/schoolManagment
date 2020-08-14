import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSubjectsService } from 'src/app/Service/user-subjects.service';
import { SbjectService } from 'src/app/Service/sbject.service';

@Component({
  selector: 'app-user-subj',
  templateUrl: './user-subj.component.html',
  styleUrls: ['./user-subj.component.scss']
})
export class UserSubjComponent implements OnInit {
  id: Number;
  userSubjects: any[];
  sub:any = {};
  userSub:any[] = [];
  form = new FormData();
  subjects: any;
  constructor(private route: ActivatedRoute, private user_subject: UserSubjectsService, private subjectService: SbjectService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.user_subject.getUserSubjects(this.id).subscribe(
      (data: any) => this.userSubjects = data,
      (error: any) => { },
      () => {
        this.subjectService.getListSubjects().subscribe(
          (data: any) => { this.subjects = data ;console.log(data)}
        )
      }
    )
  }

  remove(name: string) {
    this.userSubjects.splice(this.userSubjects.indexOf(name), 1);
  }

  add(subjecttoadd: any) {   
    let itemAlreadyExist = this.userSubjects.find(
      item => item.id === subjecttoadd.id 
    );

    if(itemAlreadyExist){
      alert("already added");
    }
    else{
      this.userSubjects.push(subjecttoadd)   
    }

   
  }

  save(){
    
    var form = new FormData();
   
    
    this.userSubjects.forEach(function (value) {
      form.append("subject", value.id);
      console.log(value.id + value.name);
    });
    this.user_subject.updateUserSubjects(this.id,form)
   }
}
