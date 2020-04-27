import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = "http://127.0.0.1:8000/api/";
token:any = "";
user:any = {};
  constructor(private http:HttpClient) { }

  login(user:any){
    console.log(user)
    this.http.post(this.baseUrl + "login/",user).subscribe(
      (data:any)=>{
        this.user = JSON.parse(data)
        console.log(this.user)
      }
    )
  }

  gettoken(){
    return this.token
  }

  getusertype(){

  }
}
