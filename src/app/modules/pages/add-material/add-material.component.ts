import { Component, OnInit } from '@angular/core';
import { SbjectService } from 'src/app/Service/sbject.service';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/Service/material.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {
  subjects:any =[];
  model:Material = {
    subject:0,
    material_type:"pdf",
    title:"",
    path:null,
    notes:""
  };

  formData:FormData = new FormData();
  
  constructor(private materialService:MaterialService,private subjectService:SbjectService) { }

  ngOnInit() {
    this.subjectService.getListSubjects().subscribe(
      (response:any)=>{this.subjects = response}
    )
  }

  setSubject(subjectId:number){    
    this.model.subject = subjectId;
  }

  /*changeFile(files: FileList){
    /*this.model.path = files.item(0);
    let formData = new FormData();
    formData.append('path',this.model.path.name);
  
   let testData:FormData = new FormData();
   console.log(testData)
  }*/

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      console.log(file)
     
      this.formData.append('uploadFile', file, file.name);
     
      console.log(this.formData)
      
      
  }
}

  addMaterial(){
    this.formData =  new FormData(); 
    
    console.log(this.formData)
    this.materialService.save(this.formData).subscribe(
      ()=>{}
    )
  }
}
