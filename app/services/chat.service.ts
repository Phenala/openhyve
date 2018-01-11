
import { of } from 'rxjs/observable/of';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Contact, Message } from './../service-values';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {


  private chatUrl = 'api/messages';
  messages: Message[] = [];
  isMessageLoading = false;
  activeContact: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMessages(id: string) {
    this.activeContact = id;
    this.messages = [];
    this.isMessageLoading = true;
    this.http.get<Message[]>(this.chatUrl).subscribe(message => {
      this.messages = message;
      this.isMessageLoading = false;
    });
  }

  getActiveContact (): Message {
    return this.messages.find(message => {
      return message.id === this.activeContact;
    });
  }

  sendMessage(messageValue: string) {
    //this.http.post
  }
}
