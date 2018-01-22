import { TabStyle } from './../../pagestates';
import { TeamService } from './../../services/team.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.component.html',
  styleUrls: ['./team-content.component.scss']
})
export class TeamContentComponent implements OnInit {

  tabOffset: number;
  activeTab: number;

  tabs = ['Announcements', 'Projects', 'Members', 'Details'];
  tabteams = [ 'Details', 'Members', 'Projects'];

  tabStyle: TabStyle;

  constructor(public teamService: TeamService) { }

  ngOnInit() {

  }

  changeTab(tabdata) {
    this.tabStyle = tabdata.style;
    this.activeTab = tabdata.tab;
  }

}
