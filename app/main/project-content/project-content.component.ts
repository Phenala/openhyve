import { ProjectService } from './../../services/project.service';
import { TabStyle } from './../../pagestates';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {

  tabs = ['Tasks', 'Contributors', 'Details'];

  activeTab = 0;
  tabStyle: TabStyle;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
  }

  changeTab(tabdata) {
    this.tabStyle = tabdata.style;
    this.activeTab = tabdata.tab;
  }
}
