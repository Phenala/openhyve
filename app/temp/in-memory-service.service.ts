import { TaskStatus, Stage } from './../service-values';
// tslint:disable: max-line-length
import { MyTeam, SearchTeams, Announcement, Project, LoginResponse, Contact, MyProject, TaskSet, Task, SearchProjects } from './../service-values';
import { InMemoryDbService } from 'angular-in-memory-web-api';


// tslint:disable:max-line-length

export class InMemoryServiceService implements InMemoryDbService {
  createDb() {

    const loginRes: LoginResponse = {
      status: true,
      token: 'kadjlsfhciuabuhbdfkjaciuewhfkjalsciouneawkfjhsliunweilfkjahocuaewkhfliadsuhiuohflkcencawiuounnksadhfliuhaiue',
      errorMessage: 'No Error'
    };

    const usernameCheck = {
      output: true,
    };

    const signupRes = {
      output: true
    };

    const contacts = [
      { id: 'asdfdsafsdvxsfe', imageUrl: 'blabla', name: 'David Berkmann', online: true, lastOnline: '8 minutes ago', sentLastMessage: false, unseenMessages: 8, lastMessage: 'Do not underestmate the results of the Edinburg match. I\'m sure the stock will bounce back up soon.' },
      { id: 'asasdfcvsfdfdfe', imageUrl: 'blabla', name: 'Angelou Winston', online: true, lastOnline: '8 minutes ago', sentLastMessage: false, unseenMessages: 2, lastMessage: 'See you at the festival' },
      { id: 'asdzcxvdfgsdvxe', imageUrl: 'blabla', name: 'Boris Schletovsky', online: true, lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 7, lastMessage: 'He pitched the proposal at the last minute.' },
      { id: 'asdmyhngvxsfedv', imageUrl: 'blabla', name: 'Raira Mutumba', online: true, lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 0, lastMessage: 'All is forgiven.' },
      { id: 'asntsadgfkhjnfe', imageUrl: 'blabla', name: 'Dolce Gabanna', online: true, lastOnline: '8 minutes ago', sentLastMessage: false, unseenMessages: 2, lastMessage: 'Never Mind.' }
    ];

    const messages = [
      {
        message: 'Do no wrong, amirite?',
        timestamp: '8 seconds ago',
        sent: false,
        seen: false
      },
      {
        message: 'Technically, no. Because you are repeating yourself. A man knows nothing about most of what he speaks of, and that saying is all too true in your case.',
        timestamp: '22 seconds ago',
        sent: true,
        seen: true
      },
      {
        message: 'So no meeting on the morrow? A shame, since I was kinda looking forward to it',
        timestamp: '45 seconds ago',
        sent: false,
        seen: true
      },
      {
        message: 'Perhaps. I\'m not one to assume.',
        timestamp: '57 seconds ago',
        sent: false,
        seen: true
      }
    ];

    const searchContacts = [
      { id: 5, imageUrl: 'blabla', name: 'Boris Schletovsky', lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 7, lastMessage: 'He pitched the proposal at the last minute.' },
      { id: 3, imageUrl: 'blabla', name: 'Raira Mutumba', lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 0, lastMessage: 'All is forgiven.' },
    ];

    const myteams: MyTeam[] = [
      {
        id: 'sdfasdffdcalkfj',
        name: 'Clarity',
        imageUrl: 'dsalkfj',
        description: 'A team of geologists dedicated to studying dinosaurs',
        visibility: false,
        leader: {
          id: 'asdf',
          firstName: 'Devon',
          lastName: 'Miziaka',
          imageUrl: 'asdfadsf',
          title: 'Car Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        focus: 'Geology',
        memberCount: 74,
        unseenAnnouncements: 4,
        teamPerformance: 14,
        teamPerformanceChange: 14,
        teamWeeklyProgress: 8,
        teamWeeklyProgressChange: 14,
        teamScheduleAdherence: 92,
        teamScheduleAdherenceChange: 14,
        teamStatus: 'Good'
      }, {
        id: 'sdfalasdxcvhkfj',
        name: 'Daedalus',
        imageUrl: 'dsalkfj',
        description: 'Star trek fans gathered together to raise chaos from the deeps',
        visibility: false,
        leader: {
          id: 'asdf',
          firstName: 'Devon',
          lastName: 'Miziaka',
          imageUrl: 'asdfadsf',
          title: 'Car Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        focus: 'Spaceships',
        memberCount: 74,
        unseenAnnouncements: 4,
        teamPerformance: 14,
        teamPerformanceChange: 14,
        teamWeeklyProgress: 8,
        teamWeeklyProgressChange: 14,
        teamScheduleAdherence: 92,
        teamScheduleAdherenceChange: 14,
        teamStatus: 'Good'
      }
    ];

    const searchTeams: SearchTeams = {
      teams: [
        {
          id: 'sdfa564sadf5f1ds',
          name: 'Clarity',
          imageUrl: 'sdfdsfadfa',
          leader: {
            id: 'asdf',
            firstName: 'Corridor',
            lastName: 'Blaze',
            imageUrl: 'asdfadsf',
            title: 'Car Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          focus: 'Web Development',
          description: 'No kayaking has been allowed in the regions of the Amazon Rainforest',
          visibility: true,
          memberCount: 8
        }, {
          id: 'sdfa56415f1ds',
          name: 'Octarine Core',
          imageUrl: 'sdfdsfadfa',
          leader: {
            id: 'asdf',
            firstName: 'Corridor',
            lastName: 'Blaze',
            imageUrl: 'asdfadsf',
            title: 'Car Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          focus: 'Web Development',
          description: 'No kayaking has been allowed in the regions of the Amazon Rainforest',
          visibility: true,
          memberCount: 8
        }
      ],
      myteams: [
        {
          id: 'sdfalasdxcvhkfj',
          name: 'Daedalus',
          imageUrl: 'dsalkfj',
          description: 'Star trek fans gathered together to raise chaos from the deeps',
          visibility: false,
          leader: {
            id: 'asdf',
            firstName: 'Devon',
            lastName: 'Miziaka',
            imageUrl: 'asdfadsf',
            title: 'Car Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          focus: 'Spaceships',
          memberCount: 74,
          unseenAnnouncements: 4,
          teamPerformance: 14,
          teamPerformanceChange: 14,
          teamWeeklyProgress: 8,
          teamWeeklyProgressChange: 14,
          teamScheduleAdherence: 92,
          teamScheduleAdherenceChange: 14,
          teamStatus: 'Good'
        }
      ]
    };

    const announcements: Announcement[] = [
      {
        mainMessage: {
          id: 'string',
          message: 'This is a message of the highest importance. Tomorrow we will be releasing a demo of the parts that we are currently working on.' +
          'In addition the deadlines for the submission of expense reports are March 25th, so get on those early.',
          timestamp: '34 minutes ago',
          seen: true,
          sent: false,
          sender: {
            id: 'asdf',
            firstName: 'Donna',
            lastName: 'Sparkles',
            imageUrl: 'asdfadsf',
            title: 'UI Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          }
        },
        replies: [
          {
            id: 'string',
            message: 'We are all in agreement. Everyone here wishes you the best of luck with this.',
            timestamp: '12 minutes ago',
            seen: true,
            sent: false,
            sender: {
              id: 'asdf',
              firstName: 'Raymone',
              lastName: 'Davis',
              imageUrl: 'asdfadsf',
              title: 'UI Designer',
              description: 'Not related to Pink Sparkles',
              skills: ['UI Design', 'UX Consulting']
            }
          },
          {
            id: 'string',
            message: 'This is a message',
            timestamp: '9 minutes ago',
            seen: true,
            sent: false,
            sender: {
              id: 'asdf',
              firstName: 'Donna',
              lastName: 'Sparkels',
              imageUrl: 'asdfadsf',
              title: 'UI Designer',
              description: 'Not related to Pink Sparkles',
              skills: ['UI Design', 'UX Consulting']
            }
          }
        ]
      }, {
        mainMessage: {
          id: 'string',
          message: 'This is a message of the highest importance. Tomorrow we will be releasing a demo of the parts that we are currently working on.' +
          'In addition the deadlines for the submission of expense reports are March 25th, so get on those early.',
          timestamp: '34 minutes ago',
          seen: true,
          sent: false,
          sender: {
            id: 'asdf',
            firstName: 'Donna',
            lastName: 'Sparkels',
            imageUrl: 'asdfadsf',
            title: 'UI Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          }
        },
        replies: [
          {
            id: 'string',
            message: 'We are all in agreement. Everyone here wishes you the best of luck with this.',
            timestamp: '12 minutes ago',
            seen: true,
            sent: false,
            sender: {
              id: 'asdf',
              firstName: 'Raymone',
              lastName: 'Davis',
              imageUrl: 'asdfadsf',
              title: 'UI Designer',
              description: 'Not related to Pink Sparkles',
              skills: ['UI Design', 'UX Consulting']
            }
          },
          {
            id: 'string',
            message: 'This is a message',
            timestamp: '9 minutes ago',
            seen: true,
            sent: false,
            sender: {
              id: 'asdf',
              firstName: 'Donna',
              lastName: 'Sparkels',
              imageUrl: 'asdfadsf',
              title: 'UI Designer',
              description: 'Not related to Pink Sparkles',
              skills: ['UI Design', 'UX Consulting']
            }
          }
        ]
      }
    ];

    const teamProjects: Project[] = [
      {
        id: 'sadjfhj',
        name: 'The Zeta Project',
        imageUrl: 'asldkfjkl',
        description: 'A step toward achieving full dive Virtual Reality systems',
        field: 'VR',
        leader: {
          id: 'asdf',
          firstName: 'Balster',
          lastName: 'Bordeaux',
          imageUrl: 'asdfadsf',
          title: 'Car Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        contributors: 32
      },
      {
        id: 'sadjfhj',
        name: 'Ditto Ditto',
        imageUrl: 'asldkfjkl',
        description: 'Aim is to create cool drones',
        field: 'Automated Drone Research',
        leader: {
          id: 'asdf',
          firstName: 'Shinzen',
          lastName: 'Nakahara',
          imageUrl: 'asdfadsf',
          title: 'Car Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        contributors: 32
      },
      {
        id: 'sadjfhj',
        name: 'Tango',
        imageUrl: 'asldkfjkl',
        description: 'Module for accelerated AI development',
        field: 'Assistant AI',
        leader: {
          id: 'asdf',
          firstName: 'Wallace',
          lastName: 'Punta',
          imageUrl: 'asdfadsf',
          title: 'Car Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        contributors: 32
      }
    ];

    const tasks: Task[] = [
      {
        id: 'sadfdsaf',
        title: 'Rig model',
        number: 117,
        description: 'The elemental fury model needs to be rigged. No kayaking has been allowed in the regions of the Amazon Rainforest',
        priority: 'normal',
        tag: ['UI', 'Interface'],
        pitches: [
          {
            user: {
              id: 'asdf',
              firstName: 'Donna',
              lastName: 'Sparkels',
              imageUrl: 'asdfadsf',
              title: 'UI Designer',
              description: 'Not related to Pink Sparkles',
              skills: ['UI Design', 'UX Consulting']
            },
            pitch: 'Very Nice'
          }
        ],
        status: TaskStatus.completed,
        deadline: 46531564,
        assigner: {
          id: 'asdf',
          firstName: 'Donna',
          lastName: 'Sparkels',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        assignee: {
          id: 'asdfsdaf',
          firstName: 'Rob',
          lastName: 'Shock',
          imageUrl: 'asdfadsf',
          title: 'PGA Analyst',
          description: 'Very related to Pink Sparkles',
          skills: ['Ambiguousness']
        },
        assigneeTeam: {
          id: 'sdfa564sadf5f1ds',
          name: 'Clarity',
          imageUrl: 'sdfdsfadfa',
          leader: {
            id: 'asdf',
            firstName: 'Buck',
            lastName: 'Water',
            imageUrl: 'asdfadsf',
            title: 'Car Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          focus: 'Web Development',
          description: 'No kayaking has been allowed in the regions of the Amazon Rainforest',
          visibility: true,
          memberCount: 8
        },
        supervisor: null,
        transferRequests: [],
      },
      {
        id: 'sytjgfadfdsaf',
        title: 'Rig model',
        number: 117,
        description: 'The elemental fury model needs to be rigged',
        priority: 'normal',
        tag: ['UI', 'Interface'],
        pitches: [],
        status: TaskStatus.inprogress,
        deadline: 46531564,
        assigner: {
          id: 'asdf',
          firstName: 'Lina',
          lastName: 'Murc',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        assignee: {
          id: 'asdfsdaf',
          firstName: 'Koloching',
          lastName: 'Sparkels',
          imageUrl: 'asdfadsf',
          title: 'PGA Analyst',
          description: 'Very related to Pink Sparkles',
          skills: ['Ambiguousness']
        },
        assigneeTeam: {
          id: 'sdfa564sadf5f1ds',
          name: 'Clarity',
          imageUrl: 'sdfdsfadfa',
          leader: {
            id: 'asdf',
            firstName: 'Donna',
            lastName: 'Sparkels',
            imageUrl: 'asdfadsf',
            title: 'Car Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          focus: 'Web Development',
          description: 'No kayaking has been allowed in the regions of the Amazon Rainforest',
          visibility: true,
          memberCount: 8
        },
        supervisor: null,
        transferRequests: [],
      },
      {
        id: 'sadfdsdfsaf',
        title: 'Rig model',
        number: 117,
        description: 'The elemental fury model needs to be rigged',
        priority: 'normal',
        tag: ['UI', 'Interface'],
        pitches: [],
        status: TaskStatus.pendingEvaluation,
        deadline: 46531564,
        assigner: {
          id: 'asdf',
          firstName: 'Donna',
          lastName: 'Sparkels',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        assignee: {
          id: 'asdfsdaf',
          firstName: 'Bobo',
          lastName: 'Skullz',
          imageUrl: 'asdfadsf',
          title: 'PGA Analyst',
          description: 'Very related to Pink Sparkles',
          skills: ['Ambiguousness']
        },
        assigneeTeam: {
          id: 'sdfa564sadf5f1ds',
          name: 'Clarity',
          imageUrl: 'sdfdsfadfa',
          leader: {
            id: 'asdf',
            firstName: 'Donna',
            lastName: 'Sparkels',
            imageUrl: 'asdfadsf',
            title: 'Car Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          focus: 'Web Development',
          description: 'No kayaking has been allowed in the regions of the Amazon Rainforest',
          visibility: true,
          memberCount: 8
        },
        supervisor: null,
        transferRequests: []
      },
      {
        id: 'sadfdsdfsaf',
        title: 'Rig model',
        number: 117,
        description: 'The elemental fury model needs to be rigged',
        priority: 'normal',
        tag: ['UI', 'Interface'],
        pitches: [],
        status: TaskStatus.pendingRevision,
        deadline: 46531564,
        assigner: {
          id: 'asdf',
            firstName: 'Donna',
            lastName: 'Sparkels',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        assignee: {
          id: 'asdfsdaf',
          firstName: 'Donna',
          lastName: 'Sparkels',
          imageUrl: 'asdfadsf',
          title: 'PGA Analyst',
          description: 'Very related to Pink Sparkles',
          skills: ['Ambiguousness']
        },
        assigneeTeam: {
          id: 'sdfa564sadf5f1ds',
          name: 'Clarity',
          imageUrl: 'sdfdsfadfa',
          leader: {
            id: 'asdf',
            firstName: 'Dos',
            lastName: 'Sss',
            imageUrl: 'asdfadsf',
            title: 'Car Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          focus: 'Web Development',
          description: 'No kayaking has been allowed in the regions of the Amazon Rainforest',
          visibility: true,
          memberCount: 8
        },
        supervisor: null,
        transferRequests: []
      },
      {
        id: 'sadfdsdfsaf',
        title: 'Rig model',
        number: 117,
        description: 'The elemental fury model needs to be rigged',
        priority: 'normal',
        tag: ['UI', 'Interface'],
        pitches: [],
        status: TaskStatus.waiting,
        deadline: 46531564,
        assigner: {
          id: 'asdf',
          firstName: 'Dondsfana',
          lastName: 'Sparkesls',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        assignee: {
          id: 'asdfsdaf',
          firstName: 'Donna',
          lastName: 'Sparkels',
          imageUrl: 'asdfadsf',
          title: 'PGA Analyst',
          description: 'Very related to Pink Sparkles',
          skills: ['Ambiguousness']
        },
        assigneeTeam: {
          id: 'sdfa564sadf5f1ds',
          name: 'Clarity',
          imageUrl: 'sdfdsfadfa',
          leader: {
            id: 'asdf',
            firstName: 'Donna',
            lastName: 'Sparkels',
            imageUrl: 'asdfadsf',
            title: 'Car Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          focus: 'Web Development',
          description: 'No kayaking has been allowed in the regions of the Amazon Rainforest',
          visibility: true,
          memberCount: 8
        },
        supervisor: null,
        transferRequests: []
      },
      {
        id: 'sadfdsdfsaf',
        title: 'Rig model',
        number: 117,
        description: 'The elemental fury model needs to be rigged',
        priority: 'normal',
        tag: ['UI', 'Interface'],
        pitches: [],
        status: TaskStatus.inprogress,
        deadline: 46531564,
        assigner: {
          id: 'asdf',
          firstName: 'Donna',
          lastName: 'Sparkels',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        assignee: {
          id: 'asdfsdaf',
          firstName: 'Donna',
          lastName: 'Sparkels',
          imageUrl: 'asdfadsf',
          title: 'PGA Analyst',
          description: 'Very related to Pink Sparkles',
          skills: ['Ambiguousness']
        },
        assigneeTeam: {
          id: 'sdfa564sadf5f1ds',
          name: 'Clarity',
          imageUrl: 'sdfdsfadfa',
          leader: {
            id: 'asdf',
            firstName: 'Donna',
            lastName: 'Sparkels',
            imageUrl: 'asdfadsf',
            title: 'Car Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          focus: 'Web Development',
          description: 'No kayaking has been allowed in the regions of the Amazon Rainforest',
          visibility: true,
          memberCount: 8
        },
        supervisor: null,
        transferRequests: []
      }
    ];

    const sets: TaskSet[] = [{
        id: 'sdafdfs',
        name: 'Interface Redesign',
        number: 11,
        deadline: 651313218,
        description: 'Set of tasks to be completed before 2020',
        setCompletion: 100
      },
      {
        id: 'sakbmgffs',
        name: 'Controller Testing',
        number: 12,
        deadline: 6513423218,
        description: 'Manage the different aspects created by the gefjon controller.',
        setCompletion: 84
      },
      {
        id: 'sahrtvffs',
        name: 'Studio Demolition',
        number: 13,
        deadline: 6513423218,
        description: 'The Pier 45 studio needs to be demolished to make way for certain improvements.',
        setCompletion: 22
      },
      {
        id: 'sahtnyfs',
        name: 'Duck Hunting',
        number: 13,
        deadline: 6513423218,
        description: 'Ducks need to be hunted.',
        setCompletion: 0
      }
    ];

    const myprojects: MyProject[] = [
      {
        id: 'sadjfhj',
        name: 'The Zeta Project',
        imageUrl: 'asldkfjkl',
        description: 'A step toward achieving full dive Virtual Reality systems',
        field: 'VR',
        leader: {
          id: 'asdf',
          firstName: 'Donna',
          lastName: 'Sparkels',
          imageUrl: 'asdfadsf',
          title: 'UI Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        contributors: 32,
        allStages: ['Research', 'Design', 'Implementation', 'Testing', 'Deployment'],
        currentStage: 2,
        stageCompletion: 75,
        pulse: 4.5,
        userActivity: 74,
        userAverageCompletionTimes: 86400,
        userDeadlineCompliance: 79,
        projectScheduleAdherence: 63,
        startDate: 465135131,
        finalDate: 984531322,
        stageBurnDown: [],
        setBurnDown: [],
        taskBurnDown: []
      }
    ];

    const searchprojects: SearchProjects = {
      projects: [
        {
          id: 'sadjfhj',
          name: 'Ditto Ditto',
          imageUrl: 'asldkfjkl',
          description: 'Aim is to create cool drones',
          field: 'Automated Drone Research',
          leader: {
                    id: 'asdf',
                    firstName: 'Donna',
                    lastName: 'Sparkels',
                    imageUrl: 'asdfadsf',
                    title: 'UI Designer',
                    description: 'Not related to Pink Sparkles',
                    skills: ['UI Design', 'UX Consulting']
                  },
          contributors: 32
        },
        {
          id: 'sadjfhj',
          name: 'Tango',
          imageUrl: 'asldkfjkl',
          description: 'Module for accelerated AI development',
          field: 'Assistant AI',
          leader: {
                    id: 'asdf',
                    firstName: 'Donna',
                    lastName: 'Sparkels',
                    imageUrl: 'asdfadsf',
                    title: 'UI Designer',
                    description: 'Not related to Pink Sparkles',
                    skills: ['UI Design', 'UX Consulting']
                  },
          contributors: 32
        }
      ],
      myprojects: [
        {
          id: 'sadjfhj',
          name: 'The Zeta Project',
          imageUrl: 'asldkfjkl',
          description: 'A step toward achieving full dive Virtual Reality systems',
          field: 'VR',
          leader: {
            id: 'asdf',
            firstName: 'Rakim',
            lastName: 'Sld',
            imageUrl: 'asdfadsf',
            title: 'UI Designer',
            description: 'Not related to Pink Sparkles',
            skills: ['UI Design', 'UX Consulting']
          },
          contributors: 32,
          allStages: ['Research', 'Design', 'Implementation', 'Testing', 'Deployment'],
          currentStage: 2,
          stageCompletion: 75,
          pulse: 4.5,
          userActivity: 74,
          userAverageCompletionTimes: 86400,
          userDeadlineCompliance: 79,
          projectScheduleAdherence: 63,
          startDate: 465135131,
          finalDate: 984531322,
          stageBurnDown: [],
          setBurnDown: [],
          taskBurnDown: []
        }
      ]
    };

    const stages: Stage[] = [
      {
        id: 'adsfdssfavf',
        stage: 'Research',
        description: 'asdlkfjlsakfdj;adlskfj;lasfdkj;ladskfj;lasdfjkds;lakfj;dsfjklasjfdlkjdfs;',
        startDate: new Date(1245789543756),
        deadline: new Date(1245789551111),
        completionDate: new Date(124578954375),
        stageNo: 1,
        stageValue: 100
      },
      {
        id: 'kjndskcndoj',
        stage: 'Design',
        description: 'asdlkfjlsakfdj;adlskfj;lasfdkj;ladskfj;lasdfjkds;lakfj;dsfjklasjfdlkjdfs;',
        startDate: new Date(1245789543756),
        deadline: new Date(1245789551111),
        completionDate: new Date(124578954375),
        stageNo: 2,
        stageValue: 100
      },
      {
        id: 'skjfncjakdfj',
        stage: 'Implementation',
        description: 'asdlkfjlsakfdj;adlskfj;lasfdkj;ladskfj;lasdfjkds;lakfj;dsfjklasjfdlkjdfs;',
        startDate: new Date(1245789543756),
        deadline: new Date(1245789551111),
        completionDate: new Date(124578954375),
        stageNo: 3,
        stageValue: 42
      },
      {
        id: 'dbciussfkajdn',
        stage: 'Testing',
        description: 'asdlkfjlsakfdj;adlskfj;lasfdkj;ladskfj;lasdfjkds;lakfj;dsfjklasjfdlkjdfs;',
        startDate: new Date(1245789543756),
        deadline: new Date(1245789551111),
        completionDate: new Date(124578954375),
        stageNo: 4,
        stageValue: 0
      },
      {
        id: 'adlfnckjasn',
        stage: 'Deployment',
        description: 'asdlkfjlsakfdj;adlskfj;lasfdkj;ladskfj;lasdfjkds;lakfj;dsfjklasjfdlkjdfs;',
        startDate: new Date(1245789543756),
        deadline: new Date(1245789551111),
        completionDate: new Date(124578954375),
        stageNo: 5,
        stageValue: 0
      }
    ];

    return {
      loginRes,
      usernameCheck,
      signupRes,
      contacts,
      messages,
      searchContacts,
      myteams,
      searchTeams,
      announcements,
      teamProjects,
      myprojects,
      sets,
      searchprojects,
      tasks,
      stages
    };
  }
}
