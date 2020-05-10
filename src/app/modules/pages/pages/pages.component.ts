import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

declare var $;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private auth:AuthService) {
    auth.logOut();
  }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    $('body').addClass('hold-transition skin-blue sidebar-mini');
  }

}
