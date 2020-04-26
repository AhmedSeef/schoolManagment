import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = "http://127.0.0.1:8000/";
taken:any = "";
user:any = {};
  constructor(private http:HttpClient) { }

  login(user:any){
    this.http.get(this.baseUrl + "login/",user).subscribe(
      (data:any)=>{console.log(data)}
    )
  }
}
