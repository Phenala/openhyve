import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpAuthService {

  constructor(private http: HttpClient) { }

  get<T> (url) {
    return this.http.get<T>(url);
  }

  post<T> (url, data) {
    return this.http.post<T>(url, data);
  }

}
