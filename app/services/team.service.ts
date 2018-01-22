import { HttpClient } from '@angular/common/http';
import { MyTeam, Team, SearchTeams, Announcement, Project } from './../service-values';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {

  // tslint:disable:max-line-length
  myteams: MyTeam[] = [];
  teams: Team[] = [];
  projects: Project[] = [];
  announcements: Announcement[] = [];
  isLoadingTeams = false;

  url = 'api/myteams';
  searchurl = 'api/searchTeams';
  announcementurl = 'api/announcements';
  projecturl = 'api/teamProjects';

  selectedTeam: string;
  selectedTeamType: string;

  constructor(private http: HttpClient) { }

  getMyTeams() {
    this.isLoadingTeams = true;
    this.http.get<MyTeam[]>(this.url).subscribe(myteams => {
      this.myteams = myteams;
      this.isLoadingTeams = false;
    });
  }

  searchTeams(val) {
    if (val === '') {
      this.getMyTeams();
    } else {
      this.isLoadingTeams = true;
      this.http.get<SearchTeams>(this.searchurl).subscribe(searchTeams => {
        this.myteams = searchTeams.myteams;
        this.teams = searchTeams.teams;
        this.isLoadingTeams = false;
        console.log(searchTeams);
      });
    }
  }

  selectTeam(team) {
    this.selectedTeam = team;
    this.selectedTeamType = 'team';
    this.myteams.map((val) => {
      if (val.id === this.selectedTeam) {
        this.selectedTeamType = 'myteam';
      }
    });
    this.getAnnouncements();
    this.getProjects();
  }

  getSelectedTeam() {
    return this.teams.find((val) => val.id === this.selectedTeam);
  }

  getSelectedMyTeam() {
    return this.myteams.find((val) => val.id === this.selectedTeam);
  }

  getAnnouncements() {
    this.announcements = [];
    this.http.get<Announcement[]>(this.announcementurl).subscribe(announcements => this.announcements = announcements);
  }

  getProjects() {
    this.projects = [];
    this.http.get<Project[]>(this.projecturl).subscribe(projects => this.projects = projects);
  }

}
