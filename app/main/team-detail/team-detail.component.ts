import { TeamService } from './../../services/team.service';
import { Team, MyTeam } from './../../service-values';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {


  teamStats = [
    {
      title: 'Team Performance',
      unit: 'Tasks per Week',
      target: 'teamPerformance'
    },
    {
      title: 'Weekly Progress',
      unit: '% Progress per Week',
      target: 'teamWeeklyProgress'
    },
    {
      title: 'Schedule Adherence',
      unit: '%',
      target: 'teamScheduleAdherence'
    }
  ];

  selectedStat = this.teamStats[0];

  team: Team;
  myTeam: MyTeam;

  constructor(public teamService: TeamService) { }

  ngOnInit() {
    this.team = this.teamService.getSelectedTeam();
    this.myTeam = this.teamService.getSelectedMyTeam();
    if (this.myTeam != null) {
      this.team = this.myTeam;
    }
  }

  selectStat(val) {
    this.selectedStat = val;
  }

}
