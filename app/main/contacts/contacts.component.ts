import { PageState } from './../../pagestates';
import { ChatService } from './../../services/chat.service';
import { ContactService } from './../../services/contact.service';
import { Contact } from './../../service-values';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  // contacts = [
  //   {
  //     'name': 'David Douglas',
  //     'image-identifier': '/jusmdkf',
  //     'online': false,
  //     'lastOnline': '7 minutes ago',
  //     'newMessageCount': 7,
  //     'lastMessage': 'This is not a drill. Return to me as soon as possible.',
  //     'sentLastMessage': false
  //   },
  //   {
  //     'name': 'Mike Wallman',
  //     'image-identifier': '/jusmdkf',
  //     'online': true,
  //     'lastOnline': '7 minutes ago',
  //     'newMessageCount': 1,
  //     'lastMessage': 'Sure, when?',
  //     'sentLastMessage': false
  //   },{
  //     'name': 'Bob Smith',
  //     'image-identifier': '/jusmdkf',
  //     'online': false,
  //     'lastOnline': '8 hours ago',
  //     'newMessageCount': 0,
  //     'lastMessage': 'They did not like the burritos we gave them. I think it had ...',
  //     'sentLastMessage': true
  //   }
  // ]

  activeContact: string;

  constructor(public contactService: ContactService, public chatService: ChatService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts();
  }

  openMessages(id: string) {
    this.activeContact = id;
    this.chatService.getMessages(id);
  }

  testfunct() {
    console.log('Rack city');
  }

}
