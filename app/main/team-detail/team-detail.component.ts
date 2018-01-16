import { Team } from './../../service-values';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  teamStats = [
    {
      title: 'Team Activity',
      unit: '%',
      target: 'teamActivity'
    },
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

  team = {
    id: 'sdaf',
    name: 'Clarity',
    imageUrl: 'asdfadsfdsaf',
    // tslint:disable:max-line-length
    description: 'A team of geologists dedicated to studying dinosaurs. No additional skills required to join, a degree in paleoanthropomorphology is sufficient. Any other extra skills are also greatly appreciated.',
    memberCount: 12,
    leader: {
      id: 'asdf',
      name: 'Donna Sparkles',
      imageUrl: 'asdfadsf',
      title: 'UI Designer',
      description: 'Not related to Pink Sparkles',
      skills: ['UI Design', 'UX Consulting']
    },
    focus: 'Geology',
    teamActivity: 75,
    teamPerformance: 14,
    teamWeeklyProgress: 8,
    teamEfficiency: 74,
    teamScheduleAdherence: 92,
    teamStatus: 'Good'
  };

  constructor() { }

  ngOnInit() {
  }

  selectStat(val) {
    this.selectedStat = val;
  }

}
