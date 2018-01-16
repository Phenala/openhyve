import { Injectable } from '@angular/core';

@Injectable()
export class UiService {

  navigatorIsOpen = false;

  constructor() { }

  openNavigator() {
    this.navigatorIsOpen = true;
  }

  closeNavigator() {
    this.navigatorIsOpen = false;
  }

  toggleNavigator() {
    this.navigatorIsOpen = !this.navigatorIsOpen;
  }

}
