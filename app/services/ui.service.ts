import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UiService {

  navigatorIsOpen = false;
  disableHeader = false;
  disableNavigator = false;
  homestate = 0;

  constructor(private loginService: LoginService) { }

  openNavigator() {
    this.navigatorIsOpen = true;
  }

  closeNavigator() {
    this.navigatorIsOpen = false;
  }

  toggleNavigator() {
    this.navigatorIsOpen = !this.navigatorIsOpen;
  }

  fullPage() {
    this.disableHeader = true;
    this.disableNavigator = true;
  }

  embeddedPage() {
    this.disableHeader = false;
    this.disableNavigator = false;
  }

}
