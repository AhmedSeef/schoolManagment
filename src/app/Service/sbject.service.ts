import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SbjectService {
  baseUrl = "https://smart-school-project.herokuapp.com/api/subjects/";
  token =JSON.parse(localStorage.getItem('token'));
  headers_object;
  httpOptions;


  constructor(private http:HttpClient) { 
    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "token "+ this.token 
    });
  
    this.httpOptions = {
      headers: this.headers_object
    };
  }

  getListSubjects(){
    return this.http.get(this.baseUrl,this.httpOptions)
   }

   addSsubject(subject:any){
    return this.http.post(this.baseUrl,subject,this.httpOptions)
  }

  getUserSubjects(id:Number){
    return this.http.get("https://smart-school-project.herokuapp.com/api/users/"+id+"/subjects",this.httpOptions)
  }

  getSubjectMAterial(id:Number){
    return this.http.get("https://smart-school-project.herokuapp.com/api/subjects/"+id+"/materials",this.httpOptions)
  }
}
