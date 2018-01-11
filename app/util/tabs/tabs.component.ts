import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() tabNames = [];

  activeTab = 0;
  tabStyle = {
    width: ''
  };
  underlineStyle = {
    width: '',
    'margin-left': ''
  };

  constructor() { }

  ngOnInit() {
    const val = 100 / this.tabNames.length;
    this.tabStyle.width = val + '%';
    this.underlineStyle.width = val + '%';
  }

  switchTo(ind: number) {
    this.activeTab = ind;
    this.underlineStyle['margin-left'] = (100 * this.activeTab / this.tabNames.length) + '%';
  }

}
