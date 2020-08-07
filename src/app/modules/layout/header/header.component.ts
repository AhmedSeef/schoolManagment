import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:any;

  constructor(private auth:AuthService) {
    this.user =  this.auth.getuser();    
  }

  ngOnInit() {
    //console.log(this.auth.user)
  }

  checkAdm(rule:any){
    if(this.auth.getusertype()==rule){
      return true;
    }
  }
}
