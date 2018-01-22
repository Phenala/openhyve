import { TeamService } from './../../services/team.service';
import { Announcement, TeamChatMessage } from './../../service-values';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';


// tslint:disable:max-line-length

@Component({
  selector: 'app-team-chat',
  templateUrl: './team-chat.component.html',
  styleUrls: ['./team-chat.component.scss']
})
export class TeamChatComponent implements OnInit {

  @Input() refresh: EventEmitter<void>;
  replyPost = -1;

  constructor(public teamService: TeamService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.teamService.getAnnouncements();
  }

  setReply(num) {
    this.replyPost = num;
  }

}
