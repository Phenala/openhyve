import { Contact, Team, SearchTeams } from './../service-values';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  searchContacts(value: string): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/searchContacts');
  }

  searchTeams(value: string): Observable<SearchTeams> {
    return this.http.get<SearchTeams>('api/searchTeams');
  }

  searchProjects(value: string): Observable<Team[]> {
    return this.http.get<Team[]>('api/searchContacts');
  }

}
