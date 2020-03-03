import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SharedMethodService } from 'src/app/Service/sharedMethod.service';

declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router,private sharedservice:SharedMethodService) {
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });
  }

  get(url:string){
    this.sharedservice.navigate(url);
  }
}
