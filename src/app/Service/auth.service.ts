import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://127.0.0.1:8000/api/";
  token: any = "";
  user_type: any = "";
  user: any = {};
  constructor(private http: HttpClient, private router: Router) { }

  login(user: any) {
    this.http.post(this.baseUrl + "login/", user).subscribe(
      (data: any) => {
        this.user = JSON.stringify(data.result.user);
        window.localStorage.setItem("user", this.user);

        this.token = JSON.stringify(data.result.token);
        window.localStorage.setItem("token", this.token);

        this.user_type = JSON.stringify(data.result.user.user_type);
        window.localStorage.setItem("user_type", this.user_type)

      }
    )
    if (this.getuser() != null)
      return true;
  }

  gettoken() {
    var data = localStorage.getItem("token");
    this.token = JSON.parse(data)
    return this.token;
  }

  getusertype() {
    this.user_type = JSON.parse(localStorage.getItem('user_type'));
    console.log(this.user_type)
    return this.user_type;
  }

  getuser() {
    var data = localStorage.getItem('user');
    this.user = JSON.parse(data);
    return this.user;
  }

  logOut() {
    var data = localStorage.getItem("token");
    this.token = JSON.parse(data)
    if (this.token == null || this.token == "") {
      this.router.navigateByUrl("http://localhost:4200/login")
      
    }
  }
}
