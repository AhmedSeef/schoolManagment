import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SbjectService {
  baseUrl = "http://127.0.0.1:8000/api/subjects/";
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

}
