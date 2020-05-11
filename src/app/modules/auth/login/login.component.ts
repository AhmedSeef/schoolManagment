import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user:any = {};

  constructor(private auth:AuthService,private share:SharedMethodService) {
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  login(){  
    console.log(this.user)  
     var result =this.auth.login(this.user);
     if(result===true){
       this.share.navigate("home")
    }
  }

}
