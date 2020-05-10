import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = "http://127.0.0.1:8000/api/categorys/";
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

  getListCategories(){
   return this.http.get(this.baseUrl,this.httpOptions)
  }

  addCategory(category:any){
    return this.http.post(this.baseUrl,category,this.httpOptions)
  }

  
}
