import { Project, MyProject, Set } from './../../service-values';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  myprojects: MyProject[] = [
    {
      id: 'sadjfhj',
      name: 'The Zeta Project',
      imageUrl: 'asldkfjkl',
      coverImageUrl: 'lksdafjdskl',
      description: 'A step toward achieving full dive Virtual Reality systems',
      field: 'VR',
      leader: 'Raymone David',
      contributors: 32,
      teams: [{
                id: 'kdsjafsfdhlkjh65sdf',
                name: 'EagleSong',
                imageUrl: 'sdfdsdfsfadfa',
                description: 'No description Available',
                leader: {
                  id: 'asdf',
                  name: 'Donna Sparkles',
                  imageUrl: 'asdfadsf',
                  title: 'UI Designer',
                  description: 'Not related to Pink Sparkles',
                  skills: ['UI Design', 'UX Consulting']
                },
                focus: 'Mobile Development',
                memberCount: 4
              },
              {
                id: 'kdsjafsfdhlkjh65sdf',
                name: 'Octarine Core',
                imageUrl: 'sdfdsdfsfadfa',
                description: 'No description Available',
                leader: {
                  id: 'asdf',
                  name: 'Donna Sparkles',
                  imageUrl: 'asdfadsf',
                  title: 'UI Designer',
                  description: 'Not related to Pink Sparkles',
                  skills: ['UI Design', 'UX Consulting']
                },
                focus: 'Cryptocurrency',
                memberCount: 3
              }],
      members: [{
        id: 'asdfsdaf',
        name: 'Rodney Fastbender',
        imageUrl: 'asdfadsf',
        title: 'PGA Analyst',
        description: 'Very related to Pink Sparkles',
        skills: ['Ambiguousness']
      }],
      completion: 42,
      allStages: ['Research', 'Design', 'Implementation', 'Testing', 'Deployment'],
      currentStage: 2,
      stageCompletion: 75,
      sets: [{
        id: 'sdafdfs',
        name: 'Interface Redesign',
        number: 11,
        deadline: 651313218,
        description: 'Set of tasks to be completed before 2020',
        tasks: [
          {
            id: 'sadfdsaf',
            title: 'Rig model',
            number: 117,
            description: 'The elemental fury model needs to be rigged',
            priority: 'normal',
            tag: ['UI', 'Interface'],
            pitches: [],
            progress: 71,
            deadline: 46531564,
            assigner: {
                        id: 'asdf',
                        name: 'Donna Sparkles',
                        imageUrl: 'asdfadsf',
                        title: 'UI Designer',
                        description: 'Not related to Pink Sparkles',
                        skills: ['UI Design', 'UX Consulting']
                      },
            assignee: {
                        id: 'asdfsdaf',
                        name: 'Rodney Fastbender',
                        imageUrl: 'asdfadsf',
                        title: 'PGA Analyst',
                        description: 'Very related to Pink Sparkles',
                        skills: ['Ambiguousness']
                      },
            supervisor: null,
            transferRequests: [],
            completed: false,
          }
        ],
        activeTask: 0,
        setCompletion: 41
      }],
      currentSet: 0,
      pulse: 4.5,
      userActivity: 74,
      userAverageCompletionTimes: 86400,
      userDeadlineCompliance: 79,
      projectScheduleAdherence: 63,
      startDate: 465135131,
      finalDate: 984531322,
      stageCompletionDates: [ 74, 89, 63, 54],
      setCompletionDates: [],
      stageBurnDown: [],
      setBurnDown: [],
      taskBurnDown: []
    }
    ];

  projects: Project[] = [
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
