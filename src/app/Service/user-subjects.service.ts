import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSubjectsService {

  baseUrl = "https://smart-school-project.herokuapp.com/api/users/";
  token = JSON.parse(localStorage.getItem('token'));
  headers_object;

  httpOptions;

  constructor(private http: HttpClient) {
    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "token " + this.token
    });

    this.httpOptions = {
      headers: this.headers_object
    };
  }

  getUserSubjects(id: Number) {
    return this.http.get(this.baseUrl + id + "/subjects", this.httpOptions);
  }

  updateUserSubjects(id: Number, subjects: FormData) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "token " + this.token);

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: subjects
    };

    fetch("https://smart-school-project.herokuapp.com/api/users/" + id + "/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}
