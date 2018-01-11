import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  messageInputValue: string;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.chatService.sendMessage(this.messageInputValue);
  }

}
