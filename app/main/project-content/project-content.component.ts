import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {

  tabs = ['Tasks', 'Details'];


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
