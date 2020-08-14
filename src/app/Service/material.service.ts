import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Material } from '../models/material';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  baseUrl = "https://smart-school-project.herokuapp.com/api/materials/";
  token = JSON.parse(localStorage.getItem('token'));
  headers_object;

  httpOptions;

  constructor(private http: HttpClient) {
    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "token " + this.token
    });
    this.headers_object.append('enctype', 'multipart/form-data');
    this.headers_object.set('Content-Type', 'false');
    this.headers_object.set('mimeType', 'application/json');

    this.httpOptions = {
      headers: this.headers_object
    };
  }

  getList() {
    return this.http.get(this.baseUrl, this.httpOptions);
  }

  save(material) {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + this.token);



    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: material,

    };
    return fetch("https://smart-school-project.herokuapp.com/api/materials/", requestOptions)

  }

  remove(id:Number){
    return this.http.delete(this.baseUrl+id,this.httpOptions);
  }
}