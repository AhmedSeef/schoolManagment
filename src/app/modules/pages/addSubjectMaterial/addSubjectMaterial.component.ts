import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SbjectService } from 'src/app/Service/sbject.service';
import { AuthService } from 'src/app/Service/auth.service';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/Service/material.service';

@Component({
  selector: 'app-addSubjectMaterial',
  templateUrl: './addSubjectMaterial.component.html',
  styleUrls: ['./addSubjectMaterial.component.css']
})
export class AddSubjectMaterialComponent implements OnInit {
  model:Material = {
    subject:0,
    material_type:"pdf",
    title:"",
    path:null,
    notes:""
  };
  form:FormData = new FormData();
  subjectId;
  constructor(private materialService:MaterialService,private router:ActivatedRoute,private subjectService:SbjectService,private auth:AuthService) { 
    auth.logOut();
  }

  ngOnInit() {
    this.subjectId = this.router.snapshot.params['id'];
    this.model.subject = this.subjectId;
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];   
     
    this.form.append("subject", this.model.subject.toString());
    this.form.append("material_type", "pdf");
    this.form.append("title", this.model.title);
    this.form.append("path", file, file.name);
    this.form.append("notes", this.model.notes);
  }
}

  addMaterial(){    
    this.materialService.save(this.form)
  }

}
