import { of } from 'rxjs/observable/of';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Contact, Message } from './../service-values';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ContactService {

  private contactsUrl = 'api/contacts';
  contacts: Contact[] = [];
  isContactsLoading: boolean;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getContacts () {
    this.isContactsLoading = true;
    const contactsubs = this.http.get<Contact[]>(this.contactsUrl).subscribe(contact => {
      this.contacts = contact;
      this.isContactsLoading = false;
    });
  }

  prepareContact(contact: Contact) {
    contact.lastMessage = 'lil';
  }

  handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.log('Casting of data to object failed');
      return of(result as T);
    };
  }
}
