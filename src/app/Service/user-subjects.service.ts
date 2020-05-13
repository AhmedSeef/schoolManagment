import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSubjectsService {

  baseUrl = "http://127.0.0.1:8000/api/users/";
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

  getUserSubjects(id:Number){  
   return this.http.get(this.baseUrl + id +"/subjects",this.httpOptions);
  }

  updateUserSubjects(id:Number,subjects:any){
    return this.http.patch(this.baseUrl+id+"/",subjects,this.httpOptions)
  }
}
