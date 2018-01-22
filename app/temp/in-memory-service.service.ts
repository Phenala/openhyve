import { MyTeam, SearchTeams, Announcement, Project, LoginResponse } from './../service-values';
import { InMemoryDbService } from 'angular-in-memory-web-api';


// tslint:disable:max-line-length

export class InMemoryServiceService implements InMemoryDbService {
  createDb() {

    const loginRes: LoginResponse = {
      status: true,
      token: 'kadjlsfhciuabuhbdfkjaciuewhfkjalsciouneawkfjhsliunweilfkjahocuaewkhfliadsuhiuohflkcencawiuounnksadhfliuhaiue',
      errorMessage: 'No Error'
    };

    const contacts = [
      { id: 2, imageUrl: 'blabla', name: 'David Berkmann', lastOnline: '8 minutes ago', sentLastMessage: false, unseenMessages: 8, lastMessage: 'Do not underestmate the results of the Edinburg match. I\'m sure the stock will bounce back up soon.' },
      { id: 7, imageUrl: 'blabla', name: 'Angelou Winston', lastOnline: '8 minutes ago', sentLastMessage: false, unseenMessages: 2, lastMessage: 'See you at the festival' },
      { id: 5, imageUrl: 'blabla', name: 'Boris Schletovsky', lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 7, lastMessage: 'He pitched the proposal at the last minute.' },
      { id: 3, imageUrl: 'blabla', name: 'Raira Mutumba', lastOnline: '8 minutes ago', sentLastMessage: true, unseenMessages: 0, lastMessage: 'All is forgiven.' },
      { id: 9, imageUrl: 'blabla', name: 'Dolce Gabanna', lastOnline: '8 minutes ago', sentLastMessage: false, unseenMessages: 2, lastMessage: 'Never Mind.' }
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
          name: 'Devon Miziaka',
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
          name: 'Devon Miziaka',
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
            name: 'Corridor Blaze',
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
            name: 'Corridor Blaze',
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
            name: 'Devon Miziaka',
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
            name: 'Donna Sparkles',
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
              name: 'Raymone Davis',
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
              name: 'Donna Sparkles',
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
            name: 'Donna Sparkles',
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
              name: 'Raymone Davis',
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
              name: 'Donna Sparkles',
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
          name: 'Devon Miziaka',
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
          name: 'Devon Miziaka',
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
          name: 'Devon Miziaka',
          imageUrl: 'asdfadsf',
          title: 'Car Designer',
          description: 'Not related to Pink Sparkles',
          skills: ['UI Design', 'UX Consulting']
        },
        contributors: 32
      }
    ];

    return {
      loginRes,
      contacts,
      messages,
      searchContacts,
      myteams,
      searchTeams,
      announcements,
      teamProjects
    };
  }
}
