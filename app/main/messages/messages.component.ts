import { PageState } from './../../pagestates';
import { Observable } from 'rxjs/Observable';
import { ChatService } from './../../services/chat.service';
import { Message } from './../../service-values';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  opaqueTns = {
    opaque: this.chatService.messages.length > 0,
    transparent: this.chatService.messages.length <= 0
  };

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    //this.opaque = true;
  }

}
