import { Project } from './../../service-values';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-projects',
  templateUrl: './team-projects.component.html',
  styleUrls: ['./team-projects.component.scss']
})
export class TeamProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      id: 'sadjfhj',
      name: 'The Zeta Project',
      imageUrl: 'asldkfjkl',
      coverImageUrl: 'lksdafjdskl',
      description: 'A step toward achieving full dive Virtual Reality systems',
      field: 'VR',
      leader: 'Raymone David',
      contributors: 32
    },
    {
      id: 'sadjfhj',
      name: 'Ditto Ditto',
      imageUrl: 'asldkfjkl',
      coverImageUrl: 'lksdafjdskl',
      description: 'Aim is to create cool drones',
      field: 'Automated Drone Research',
      leader: 'Jason Reeds',
      contributors: 32
    },
    {
      id: 'sadjfhj',
      name: 'Tango',
      imageUrl: 'asldkfjkl',
      coverImageUrl: 'lksdafjdskl',
      description: 'Module for accelerated AI development',
      field: 'Assistant AI',
      leader: 'Coolio',
      contributors: 32
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
