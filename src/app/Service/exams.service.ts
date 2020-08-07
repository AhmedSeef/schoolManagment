import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  baseUrl = "http://127.0.0.1:8000/api/exams/";
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

  addExam(exam){
    return this.http.post(this.baseUrl,exam,this.httpOptions);
  }

  getExam(id:Number){
    return this.http.get(this.baseUrl+id,this.httpOptions);
  }

  getAllExam(){
    return this.http.get(this.baseUrl,this.httpOptions);
  }

  addQuestions(id:Number,question){
    return this.http.post(this.baseUrl+id+"/addQuestions/",question,this.httpOptions);
  }

  getExamQuestions(id){
    return this.http.get(this.baseUrl+id+"/questions" , this.httpOptions)
  }
}
