import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  constructor() { }

  myteams = [
    {
      id: 'sdfa56415f1ds',
      name: 'Clarity',
      imageUrl: 'sdfdsfadfa',
      leader: 'sadfdsaf45f65sd',
      members: ['sadfdsaf', 'a+65fds5', 'asfjhadfslk'],
      focus: 'Web Development',
      projects: ['651321', '654321', '986135', '6541sadf654'],
      chatbox: 'kadfdfs654s21',
      teamActivity: 48,
      teamPerformance: 14,
      teamWeeklyProgress: 24,
      teamEfficiency: 74,
      teamScheduleAdherence: 41,
      teamStatus: 'Exceptional',
      unseenAnnouncements: 4,
    },
    {
      id: 'kdsjafhlkjh65sdf',
      name: 'Manta Style',
      imageUrl: 'sdfdsfadfa',
      leader: '654321',
      members: ['safdddfdsaf', 'a+sa5fds5', 'asfjhadsfdfslk'],
      focus: 'Cryptocurrency',
      projects: ['315651dfsf', '30fs2d564'],
      chatbox: 'kadfsh6+465321',
      teamActivity: 11,
      teamPerformance: 12,
      teamWeeklyProgress: 7,
      teamEfficiency: 22,
      teamScheduleAdherence: 4,
      teamStatus: 'Sufficient',
      unseenAnnouncements: 7,
    },
  ];

  teams = [
    {
      id: 'kdsjafsfdhlkjh65sdf',
      name: 'EagleSong',
      imageUrl: 'sdfdsdfsfadfa',
      leader: '65344321',
      members: ['safdddfdsaf', 'a+sa5fds5', 'asfjhadsfdfslk'],
      focus: 'Mobile Development',
      projects: ['315651dfsf', '30fs2d56sdf4', 'adsfjkasf'],
    },
    {
      id: 'kdsjafsfdhlkjh65sdf',
      name: 'Octarine Core',
      imageUrl: 'sdfdsdfsfadfa',
      leader: '65344321',
      members: ['safdddfdsaf', 'a+sa5fds5', 'asfjhadsfdfslk'],
      focus: 'Cryptocurrency',
      projects: ['315651dfsf', '30fs2d56sdf4', 'adsfjkasf'],
    },
    {
      id: 'kdsjafsfdhlkjh65sdf',
      name: 'Tango',
      imageUrl: 'sdfdsdfsfadfa',
      leader: '65344321',
      members: ['safdddfdsaf', 'a+sa5fds5', 'asfjhadsfdfslk'],
      focus: 'Game Development',
      projects: ['315651dfsf', '30fs2d56sdf4', 'adsfjkasf']
    }
  ];

  ngOnInit() {
  }

}
