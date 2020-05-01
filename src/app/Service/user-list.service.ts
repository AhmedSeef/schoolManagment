import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserListService {
  users:any;
  baseUrl = "http://127.0.0.1:8000/api/";
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

  getAllUsers(){    
    return this.http.get(this.baseUrl + "users",this.httpOptions)    
  }

  registerUser(user:any){    
    return this.http.post(this.baseUrl + "users/",user,this.httpOptions) 
  }

  removeUser(id:number){
    id = Number(id);
    return this.http.delete(this.baseUrl + "users/"+id,this.httpOptions) 
  }

  updateUser(user:any){
    return this.http.patch(this.baseUrl + "users/" +Number(user.id),user,this.httpOptions) 
  }
  
}
