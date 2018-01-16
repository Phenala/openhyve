import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.component.html',
  styleUrls: ['./team-content.component.scss']
})
export class TeamContentComponent implements OnInit {

  tabOffset: number;

  tabs = ['Announcements', 'Projects', 'Details'];

  tabStyle = {
    'width': this.tabs.length + '02%',
    'margin-left': '0%'
  };

  tabdivStyle = {
    'width': (100 / this.tabs.length - 0.3) + '%'
  };

  constructor() { }

  ngOnInit() {

  }

  changeTab(tab: number) {
    this.tabStyle['margin-left'] = '-' + tab + '00%';
  }

}
