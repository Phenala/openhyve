import { UiService } from './../../services/ui.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  navigatorOpenWidth = 300;

  v = location;

  currentPage = {
      'title': 'Chat',
      'description': 'Communicate and keep in touch with others for better and more efficient teamwork',
      'routerlink': '/user/chat',
      'iconlink': '../../../assets/images/chat-icon.png'
    };

  navigation = [
    {
      'title': 'Home',
      'description': 'Where all can be seen',
      'routerlink': '/user/home',
      'iconlink': '../../../assets/images/svgs/home-icon.svg'
    },
    {
      'title': 'Chat',
      'description': 'Communicate and keep in touch with others for better and more efficient teamwork',
      'routerlink': '/chat',
      'iconlink': '../../../assets/images/svgs/chat-icon.svg'
    },
    {
      'title': 'Team',
      'description': 'A platform optimized for working together',
      'routerlink': '/teams',
      'iconlink': '../../../assets/images/svgs/teams-icon.svg'
    },
    {
      'title': 'Projects',
      'description': 'The projects you are working on available in one place',
      'routerlink': '/projects',
      'iconlink': '../../../assets/images/svgs/projects-icon.svg'
    },
    {
      'title': 'Boards',
      'description': 'Get together and brainstorm your ideas in a creative environment',
      'routerlink': '/user/boards',
      'iconlink': '../../../assets/images/svgs/boards-icon.svg'
    },
    {
      'title': 'Repo',
      'description': 'Never lose track of your data with our repository service',
      'routerlink': '/user/repo',
      'iconlink': '../../../assets/images/svgs/repo-icon.svg'
    },
    {
      'title': 'Profile',
      'description': 'Let people find you with the information you provide',
      'routerlink': '/user/profile',
      'iconlink': '../../../assets/images/svgs/profile-icon.svg'
    }
  ];

  constructor(public router: Router, private ui: UiService) { }

  ngOnInit() {
    console.log(this.v);
  }

  toggleNavigator() {
    this.ui.toggleNavigator();
  }

  getCurrentPage() {
    return this.navigation.find(page => page.routerlink === this.v.pathname);
  }

}
