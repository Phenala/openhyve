import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UiService {

  navigatorIsOpen = false;
  sideNavIsOpen = true;
  disableHeader = false;
  disableNavigator = false;
  isShowingImage = false;
  showImageSource: string;
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

  openSideNav() {
    this.sideNavIsOpen = true;
  }

  closeSideNav() {
    this.sideNavIsOpen = false;
  }

  toggleSideNav() {
    this.sideNavIsOpen = !this.sideNavIsOpen;
  }

  showImage(img) {
    this.showImageSource = img;
    this.isShowingImage = true;
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
