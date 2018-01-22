import { UiService } from './../../services/ui.service';
import { PageState } from './../../pagestates';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-front',
  templateUrl: './website-front.component.html',
  styleUrls: ['./website-front.component.scss']
})
export class WebsiteFrontComponent implements OnInit {

  constructor(private ui: UiService) { }

  ngOnInit() {
  }

  switchToLogin() {
    this.ui.homestate = 1;
  }

}
