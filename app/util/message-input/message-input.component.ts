import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  @Input() placeholder = 'Your Message';
  @Input() show = true;
  @Input() focus = false;

  messageInputValue: string;

  constructor(public chatService: ChatService, private el: ElementRef) { }

  ngOnInit() {
  }

  sendMessage() {
    this.chatService.sendMessage(this.messageInputValue);
  }

  leave() {
    this.focus = false;
  }

}
