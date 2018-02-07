import { HttpAuthService } from './http-auth.service';
import { HttpClient } from '@angular/common/http';
import { Project, MyProject, SearchProjects, Task, TaskSet, Stage } from './../service-values';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  searchProjectUrl = 'api/searchprojects';
  myprojectsurl = 'api/myprojects';
  tasksurl = 'api/tasks';
  setsurl = 'api/sets';
  stageurl = 'api/stages';

  myprojects = [];

  selectedProject: string;
  selectedMyProject: MyProject;

  loadingProjects = false;
  loadingTasks = true;

  projects: Project[] = [];

  tasks: Task[] = [];

  sets: TaskSet[] = [];

  stages: Stage[] = [];

  constructor(private http: HttpAuthService) { }

  getProjects() {
    this.loadingProjects = true;
    this.http.get<MyProject[]>(this.myprojectsurl).subscribe((myprojects) => {
      this.loadingProjects = false;
      this.myprojects = myprojects;
      this.selectProject(this.myprojects[0].id);
    });
  }

  getTasks() {
    this.loadingTasks = true;
    return this.http.get<Task[]>(this.tasksurl).toPromise().then((tasks) => {
      this.tasks = tasks;
      this.loadingTasks = false;
    });
  }

  getSets() {
    return this.http.get<TaskSet[]>(this.setsurl).toPromise().then((sets) => {
      this.sets = sets;
    });
  }

  getStages() {
    return this.http.get<Stage[]>(this.stageurl).toPromise().then((stages) => {
      this.stages = stages;
    });
  }

  selectProject(project) {
    this.selectedProject = project;
    this.selectedMyProject = this.myprojects.find((val) => this.selectedProject = val.id);
  }

  searchProjects(name) {
    this.loadingProjects = true;
    this.http.get<SearchProjects>(this.searchProjectUrl).subscribe(
      (searchprojects) => {
        this.myprojects = searchprojects.myprojects;
        this.projects = searchprojects.projects;
        this.loadingProjects = false;
      }
    );
  }

}
