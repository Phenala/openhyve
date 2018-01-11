import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryServiceService implements InMemoryDbService {
  createDb() {
    const contacts = [
      // tslint:disable:max-line-length
      {id: 2, imageUrl: 'blabla', name: 'David Berkmann', lastOnline: '8 minutes ago', sentLastMessage: false, unseenMessages: 8, lastMessage: 'Do not underestmate the results of the Edinburg match. I\'m sure the stock will bounce back up soon.'},
      {id: 7, imageUrl: 'blabla', name: 'Angelou Winston', lastOnline: '8 minutes ago', sentLastMessage: false, unseenMessages: 2, lastMessage: 'See you at the festival'},
      {id: 5, imageUrl: 'blabla', name: 'Boris Schletovsky', lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 7, lastMessage: 'He pitched the proposal at the last minute.'},
      {id: 3, imageUrl: 'blabla', name: 'Raira Mutumba', lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 0, lastMessage: 'All is forgiven.'},
      {id: 9, imageUrl: 'blabla', name: 'Dolce Gabanna', lastOnline: '8 minutes ago', sentLastMessage: false, unseenMessages: 2, lastMessage: 'Never Mind.'}
    ];

    const messages = [
      {
        message: 'Do no wrong, amirite?',
        timestamp: '8 seconds ago',
        sent: false,
        seen: false
      },
      {
        message: 'Technically, no. Because you are repeating yourself. A man knows nothing about most of what he speaks of, and that saying is all too true in your case.',
        timestamp: '22 seconds ago',
        sent: true,
        seen: true
      },
      {
        message: 'So no meeting on the morrow? A shame, since I was kinda looking forward to it',
        timestamp: '45 seconds ago',
        sent: false,
        seen: true
      },
      {
        message: 'Perhaps. I\'m not one to assume.',
        timestamp: '57 seconds ago',
        sent: false,
        seen: true
      }
    ];

    const searchContacts = [
      {id: 5, imageUrl: 'blabla', name: 'Boris Schletovsky', lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 7, lastMessage: 'He pitched the proposal at the last minute.'},
      {id: 3, imageUrl: 'blabla', name: 'Raira Mutumba', lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 0, lastMessage: 'All is forgiven.'},
    ];

    return {contacts, messages, searchContacts};
  }
}
