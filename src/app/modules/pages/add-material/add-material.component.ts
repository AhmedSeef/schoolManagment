import { Component, OnInit } from '@angular/core';
import { SbjectService } from 'src/app/Service/sbject.service';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/Service/material.service';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {
  loaderHidden = true;
  subjects: any = [];
  model: Material = {
    subject: 0,
    material_type: "pdf",
    title: "",
    path: null,
    notes: ""
  };

  form: FormData = new FormData();

  constructor(private materialService: MaterialService, private subjectService: SbjectService, private auth: AuthService) {
    auth.logOut();
  }

  ngOnInit() {
    this.subjectService.getListSubjects().subscribe(
      (response: any) => { this.subjects = response }
    )
  }

  setSubject(subjectId: number) {
    this.model.subject = subjectId;
  }



  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];

      this.form.append("subject", this.model.subject.toString());
      this.form.append("material_type", "pdf");
      this.form.append("title", this.model.title);
      this.form.append("path", file, file.name);
      this.form.append("notes", this.model.notes);
    }
  }

  async addMaterial() {
    this.loaderHidden = false;
    await this.delay(300);
    this.materialService.save(this.form).then(response =>{ alert("added succefully");this.loaderHidden=true})
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    this.loaderHidden = true
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
