import { UiService } from './../../services/ui.service';
import { ProjectService } from './../../services/project.service';
import { TeamService } from './../../services/team.service';
import { ContactService } from './../../services/contact.service';
import { ChatService } from './../../services/chat.service';
import { SearchService } from './../../services/search.service';
import { Contact } from './../../service-values';
import { ObservableInput, Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

// tslint:disable: max-line-length

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() tags: string;
  @Input() searchtype: string;

  searchResults = [
    {
      type: 'team',
      link: 'adsfasdsfd',
      name: 'Clarity',
      image: 'Rocss'
    },
    {
      type: 'project',
      link: 'adsfasdsfd',
      name: 'Zeta Project',
      image: 'Rocss'
    },
    {
      type: 'user',
      link: 'adsfasdsfd',
      name: 'Donna Sparkles',
      image: 'Rocss'
    }
  ];

  suggest = false;

  inputValue: string;

  constructor(private searchService: SearchService, private chatService: ChatService, private contactService: ContactService,
              private teamService: TeamService, private projectService: ProjectService, public ui: UiService) {}

  ngOnInit(): void {

  }

  search() {
    switch (this.searchtype) {
      case 'contacts':
        this.searchContact();
        break;
      case 'teams':
        this.teamService.searchTeams(this.inputValue);
        break;
      case 'projects':
        this.projectService.searchProjects(this.inputValue);
        break;
      case 'general':
        this.searchGeneral();
    }
  }

  closeResults() {
    this.suggest = false;
  }

  searchContact() {
    this.contactService.contacts = [];
    this.contactService.isContactsLoading = true;
    if (this.inputValue !== '') {
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

  searchGeneral() {
    this.showSuggest();
  }

  showSuggest() {
    this.suggest = true;
  }

  toggleSideNav() {
    this.ui.toggleSideNav();
  }

  openSideNav() {
    if (this.tags === 'tag-full-width') {
      this.ui.openSideNav();
    }
  }

  checkVis() {
    return this.tags !== 'tag-full-width' || this.ui.sideNavIsOpen;
  }

}
