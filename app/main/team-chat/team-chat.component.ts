import { Announcement, TeamChatMessage } from './../../service-values';
import { Component, OnInit } from '@angular/core';


// tslint:disable:max-line-length

@Component({
  selector: 'app-team-chat',
  templateUrl: './team-chat.component.html',
  styleUrls: ['./team-chat.component.scss']
})
export class TeamChatComponent implements OnInit {

  announcements: Announcement[] = [{
     mainMessage: {
        id: 'string',
        message: 'This is a message of the highest importance. Tomorrow we will be releasing a demo of the parts that we are currently working on.' + 
         'In addition the deadlines for the submission of expense reports are March 25th, so get on those early.',
        timestamp: '34 minutes ago',
        seen: true,
        sent: false,
        sender: {
          id: 'asdf',
          name: 'Donna Sparkles',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        }
      },
    replies: [
      {
        id: 'string',
        message: 'We are all in agreement. Everyone here wishes you the best of luck with this.',
        timestamp: '12 minutes ago',
        seen: true,
        sent: false,
        sender: {
          id: 'asdf',
          name: 'Raymone Davis',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        }
      },
      {
        id: 'string',
        message: 'This is a message',
        timestamp: '9 minutes ago',
        seen: true,
        sent: false,
        sender: {
          id: 'asdf',
          name: 'Donna Sparkles',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        }
      }
    ]
  }, {
     mainMessage: {
        id: 'string',
        message: 'This is a message of the highest importance. Tomorrow we will be releasing a demo of the parts that we are currently working on.' + 
         'In addition the deadlines for the submission of expense reports are March 25th, so get on those early.',
        timestamp: '34 minutes ago',
        seen: true,
        sent: false,
        sender: {
          id: 'asdf',
          name: 'Donna Sparkles',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        }
      },
    replies: [
      {
        id: 'string',
        message: 'We are all in agreement. Everyone here wishes you the best of luck with this.',
        timestamp: '12 minutes ago',
        seen: true,
        sent: false,
        sender: {
          id: 'asdf',
          name: 'Raymone Davis',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        }
      },
      {
        id: 'string',
        message: 'This is a message',
        timestamp: '9 minutes ago',
        seen: true,
        sent: false,
        sender: {
          id: 'asdf',
          name: 'Donna Sparkles',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        }
      }
    ]
  }
  ];

  replyPost = -1;

  constructor() { }

  ngOnInit() {
  }

  setReply(num) {
    this.replyPost = num;
  }

}
