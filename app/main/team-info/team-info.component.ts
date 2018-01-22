import { Team } from './../../service-values';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {

  team: Team = {
    id: 'sdaf',
    name: 'Clarity',
    imageUrl: 'asdfadsfdsaf',
    visibility: false,
    description: 'A team of geologists dedicated to studying dinosaurs',
    leader: {
      id: 'asdf',
      name: 'Donna Sparkles',
      imageUrl: 'asdfadsf',
      title: 'UI Designer',
      description: 'Not related to Pink Sparkles',
      skills: ['UI Design', 'UX Consulting']
    },
    focus: 'Geology',
    memberCount: 42
  };

  constructor() { }

  ngOnInit() {
  }

}
