

export class LoginResponse {
    status: boolean;
    token: string;
    errorMessage: string;
}






export class Team {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    visibility: boolean;
    leader: User;
    focus: string;
    memberCount: number;
}

export class Message {
    id: string;
    message: string;
    timestamp: string;
    seen: boolean;
    sent: boolean;
}

export class TeamChatMessage extends Message {
    sender: User;
}

export class Announcement {
    mainMessage: TeamChatMessage;
    replies: TeamChatMessage[];
}
/*
MyTeam[]
[Team[], MyTeam[]];
Announcement[];
Project[];
User[];
MyProject[]
[Project[], MyProject[]]
*/

// returns when requesting the list of teams that the user is a member of
export class MyTeam extends Team {
    teamPerformance: number;
    teamPerformanceChange: number;
    teamWeeklyProgress: number;
    teamWeeklyProgressChange: number;
    teamScheduleAdherence: number;
    teamScheduleAdherenceChange: number;
    teamStatus: string;
    unseenAnnouncements: number;
}

export class SearchTeams {
    teams: Team[];
    myteams: MyTeam[];
}

export class Graph {
    controls: string[];
    values: number[];
}

export class User {
    id: string;
    name: string;
    imageUrl: string;
    title: string;
    skills: string[];
    description: string;
}

export class Contact extends User {

    online: boolean;
    lastOnline: string;
    unseenMessages: number;
    lastMessage: string;
    sentLastMessage: boolean;

}

export class Task {
    id: string;
    number: number;
    title: string;
    description: string;
    priority: string;
    tag: string[];
    pitches: string[];
    inprogress: boolean;
    deadline: number;
    assigner: User;
    assignee: User;
    assigneeTeam: Team;
    supervisor: User;
    transferRequests: string[];
    completed: boolean;
}

export class Set {
    id: string;
    name: string;
    number: number;
    deadline: number;
    description: string;
    tasks: Task[];
    activeTask: number;
    setCompletion: number;
}

export class Project {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    field: string;
    leader: User;
    contributors: number;
}

export class MyProject extends Project {
    allStages: string[]; // ['Research', 'Design', 'Implementation', 'Testing', 'Deployment'];
    currentStage: number;
    stageCompletion: number;
    sets: Set[];
    currentSet: number;

    pulse: number;
    userActivity: number;
    userAverageCompletionTimes: number;
    userDeadlineCompliance: number;
    projectScheduleAdherence: number;

    startDate: number;
    finalDate: number;
    stageCompletionDates: number[];
    setCompletionDates: number[];
    stageBurnDown: number[];
    setBurnDown: number[];
    taskBurnDown: number[];
}




