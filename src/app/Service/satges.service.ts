import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SatgesService {
  baseUrl = "http://127.0.0.1:8000/api/stages/";
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

  getListStages(){
    return this.http.get(this.baseUrl,this.httpOptions)
   }

   addStage(satge:any){
    return this.http.post(this.baseUrl,satge,this.httpOptions)
  }

}
