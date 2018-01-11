import { ContactService } from './../../services/contact.service';
import { ChatService } from './../../services/chat.service';
import { SearchService } from './../../services/search.service';
import { Contact } from './../../service-values';
import { ObservableInput, Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() tags: String;
  @Input() searchtype: string;

  inputValue: string;

  constructor(private searchService: SearchService, private chatService: ChatService, private contactService: ContactService) {}

  ngOnInit(): void {

  }

  search() {
    switch (this.searchtype) {
      case 'contacts':
        this.searchContact();
        break;
      case 'general':
        this.searchGeneral();
    }
  }

  searchContact() {
    this.contactService.contacts = [];
    this.contactService.isContactsLoading = true;
    if (this.inputValue != '') {
      this.searchService.searchContacts(this.inputValue).subscribe(
        result => {
          this.contactService.contacts = result;
          this.contactService.isContactsLoading = false;
        }
      );
    } else {
      this.contactService.getContacts();
    }
  }

  searchGeneral() {}

}
