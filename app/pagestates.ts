import { EventEmitter } from '@angular/core';
import { ContactsComponent } from './main/contacts/contacts.component';

export class PageState {
    static messagesContacts: ContactsComponent;
}

export class TabStyle {
    outTabStyle: object;
    outTabdivStyle: object;
    alertSet: EventEmitter<void>[];
}
