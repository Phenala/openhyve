

export class Team {
    id: string;
    name: string;
    imageUrl: string;
    leader: string;
    members: string[];
    focus: string;
    projects: string[];
}

export class MyTeam extends Team {
    chatbox: string;
    teamActivity: number;
    teamPerformance: number;
    teamWeeklyProgress: number;
    teamEfficiency: number;
    teamScheduleAdherence: number;
    teamStatus: string;
    unseenAnnouncements: number;
}

export class User {
    id: string;
    name: string;
    imageUrl: string;
    title: string;
    skills: string[];
    description: string;
    projects: string[];
}


export class Contact extends User {

    online: boolean;
    lastOnline: string;
    unseenMessages: number;
    lastMessage: string;
    sentLastMessage: boolean;

}

export class Project {
    id: string;
    name: string;
    imageUrl: string;
    leader: string;
    members: string[];
    teams: string[];
}

export class MyProject extends Project {
    completion: 42;
    allStages: string[];//['Research', 'Design', 'Implementation', 'Testing', 'Deployment'];
    currentStage: number;
    stageCompletion: number;
    sets: string[];
    currentSet: number;
    setCompletion: number;
    tasks: string[];
    activeTask: string;

    pulse: number;
    userActivity: number;
    userAverageCompletionTimes: number;
    userDeadlineCompliance: number;
    projectScheduleAdherence: number;

    startDate: number;
    stageCompletionDates: number[];
    setCompletionDates: number[];
    stageBurnDown: number[];
    setBurnDown: number[];
    taskBurnDown: number[];
}

export class Message {
    id: string;
    message: string;
    timestamp: string;
    seen: boolean;
    sent: boolean;
}

