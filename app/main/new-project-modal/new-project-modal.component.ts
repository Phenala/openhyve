import { TabStyle } from './../../pagestates';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrls: ['./new-project-modal.component.scss']
})
export class NewProjectModalComponent implements OnInit {

  constructor() { }

  activeTab = 0;
  tabs = ['General', 'Members', 'Stages'];

  tabStyle: TabStyle;

  ngOnInit() {
  }

  changeTab(tabdata) {
    this.tabStyle = tabdata.style;
    this.activeTab = tabdata.tab;
  }

}
