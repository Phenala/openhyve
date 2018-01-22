import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  constructor(public teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getMyTeams();
  }

  selectTeam(team) {
    this.teamService.selectTeam(team);
  }

  clearTeams() {
    this.teamService.teams = [];
  }

}
