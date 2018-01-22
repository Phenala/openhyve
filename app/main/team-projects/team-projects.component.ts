import { TeamService } from './../../services/team.service';
import { Project } from './../../service-values';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-projects',
  templateUrl: './team-projects.component.html',
  styleUrls: ['./team-projects.component.scss']
})
export class TeamProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(public teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getProjects();
  }

}
