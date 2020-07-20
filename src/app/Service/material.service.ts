import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Material } from '../models/material';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  baseUrl = "http://127.0.0.1:8000/api/materials/";
  token =JSON.parse(localStorage.getItem('token'));
  headers_object;

  httpOptions;

  constructor(private http:HttpClient) { 
    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "token "+ this.token 
    });
    this.headers_object.append('enctype', 'multipart/form-data');
  
    this.httpOptions = {
      headers: this.headers_object
    };
  }

  getList(){
    return this.http.get(this.baseUrl,this.httpOptions);
  }

save(material){
  return this.http.post(this.baseUrl,material,this.httpOptions)
}
}
