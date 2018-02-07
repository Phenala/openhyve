

// local UI classes

export class HorizontalNavVal {
    id: string;
    descriptor: string;
    value: string;
    status: string;
    status2: string;
}

export class BandNavVal {
    link: string;
    title: string;
}

export class BandNavSet {
    parallels: BandNavVal[];
    main: number;
}

// server-client communication classes

export class LoginResponse {
    status: boolean;
    token: string;
    errorMessage: string;
}

export class Image {
    src: string;
    description: string;
}

export class ImageSet {
    images: Image[];
}

export enum TaskStatus {
    waiting,
    inprogress,
    pendingEvaluation,
    pendingRevision,
    completed
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

export class SearchProjects {
    projects: Project[];
    myprojects: MyProject[];
}

export class Graph {
    controls: string[];
    values: number[];
}

export class User {
    id: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    title: string;
    skills: string[];
    description: string;
}

export class Self extends User {
    username: string;
    email: string;
}

export class Contact extends User {

    online: boolean;
    lastOnline: string;
    unseenMessages: number;
    lastMessage: string;
    sentLastMessage: boolean;

}

export class Pitch {
    user: User;
    pitch: string;
}


export class TransferRequest {
    id: string;
    requester: User;
    task: Task;
    message: string;
}

export enum MessageStastus {
    UnSent,
    Seen,
    Sent
}

export class Task {
    id: string;
    number: number;
    title: string;
    description: string;
    priority: string;
    tag: string[];
    pitches: Pitch[];
    status: TaskStatus; // 0 if waiting, 1 if in progress, 2 if pending evaluation, 3 if confirmed, 4 if needs revision
    deadline: number;
    assigner: User;
    assignee: User;
    assigneeTeam: Team;
    supervisor: User;
    transferRequests: TransferRequest[];

    // difficulty: number;
}

export class VisibilityGroup {
    users: User[];
    teams: Team[];
    userGroup: ProjectUserGroup;
}

export enum ProjectUserGroup {
    founder,
    admin,
    supervisor,
    contributor
}

export enum TeamUserGroup {
    founder,
    admin,
    member
}

export class UserProjectLink {
    userGroup: ProjectUserGroup;
    user: User;
    project: Project;
}

export class TaskSet {
    id: string;
    name: string;
    number: number;
    deadline: number;
    // assignmentDate: string;
    // completionDate: string;
    // status: string;
    description: string;
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

    pulse: number;
    userActivity: number;
    userAverageCompletionTimes: number;
    userDeadlineCompliance: number;
    projectScheduleAdherence: number;

    startDate: number;
    finalDate: number;
    stageBurnDown: number[];
    setBurnDown: number[];
    taskBurnDown: number[];
}

export class Stage {
    id: string;
    stage: string;
    description: string;
    startDate: Date;
    deadline: Date;
    completionDate: Date;
    stageNo: number;
    stageValue: number;		// percentage the stage accounts out of 100
}


