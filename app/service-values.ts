
export class Team {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    leader: User;
    focus: string;
    memberCount: number;
}

export class TeamDetailed extends Team {
    members: User[];
    projects: Project[];
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

export class MyTeam extends TeamDetailed {
    chatbox: Announcement[];
    teamActivity: number;
    teamPerformance: number;
    teamWeeklyProgress: number;
    teamEfficiency: number;
    teamScheduleAdherence: number;
    teamStatus: string;
    unseenAnnouncements: number;
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

export class UserDetailed extends User {
    projects: Project[];
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
    progress: number;
    deadline: number;
    assigner: User;
    assignee: User;
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
    coverImageUrl: string;
    description: string;
    field: string;
    leader: string;
    contributors: number;
}

export class ProjectDetailed extends Project {
    teams: Team[];
    members: User[];
}

export class MyProject extends ProjectDetailed {
    completion: 42;
    allStages: string[];//['Research', 'Design', 'Implementation', 'Testing', 'Deployment'];
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




