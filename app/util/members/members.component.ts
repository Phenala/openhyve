import { User } from './../../service-values';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  users = [
    { user:
      {
        id: 'asdf',
        name: 'Donna Sparkles',
        imageUrl: 'asdfadsf',
        title: 'UI Designer',
        description: 'Not related to Pink Sparkles',
        skills: ['UI Design', 'UX Consulting']
      },
      meta:
      {
        status: 'Admin'
      }
    },
    { user:
      {
        id: 'asdfsdaf',
        name: 'Rodney Fastbender',
        imageUrl: 'asdfadsf',
        title: 'PGA Analyst',
        description: 'Very related to Pink Sparkles',
        skills: ['Ambiguousness']
      },
      meta:
      {
        status: 'Member'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
