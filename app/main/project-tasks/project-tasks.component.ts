import { ProjectService } from './../../services/project.service';
import { TaskStatusData } from './../../service-states';
import { Task, TaskStatus, HorizontalNavVal } from './../../service-values';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss']
})
export class ProjectTasksComponent implements OnInit {

  filterIcons = TaskStatusData.status;
  filterAll = true;

  updater = new EventEmitter<any>();

  navValues: HorizontalNavVal[] = [];

  meta = {
    valid: 'In Progress',
    past: 'Complete',
    future: 'Due'
  };
  filteredTasks = [];

  scrollfocus = null;
  scrollsuspend = false;

  filters = {};

  // filterMap = ['waiting', 'inprogress', 'completed'];

  constructor(public projectService: ProjectService) {
    // tslint:disable:forin
    // tslint:disable: max-line-length
    for (const i in TaskStatus) {
      this.filters[i] = false;
    }
  }

  ngOnInit() {
    this.getSets();
    this.getTasks();
  }

  focusTask(num) {
    const h = document.getElementById('task' + num).offsetTop - 284;
    const node = document.getElementById('enclosure');
    this.scrollTo(node, h);
    this.scrollsuspend = true;
    this.scrollfocus = num;
    setTimeout(() => {
      this.scrollsuspend = false;
    }, 500);
  }

  getTasks() {
    this.projectService.getTasks().then(() => {
        this.filteredTasks = this.projectService.tasks.filter((val) => (this.filters[this.filterIcons[val.status].reference] || this.filterAll));
      }
    );
  }

  getSets() {
    this.projectService.getSets().then((val) => {
      this.makeSetDescriptor();
    });
  }

  scrollTo(node, val) {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        node.scrollTop = (node.scrollTop + val) / 2;
      }, i * 20);
    }
  }

  encScroll() {
    if (!this.scrollsuspend) {
      this.scrollfocus = null;
    }
  }

  toggleFilter(filter) {
    // tslint:disable:forin
    // tslint:disable:max-line-length
    for (const i in this.filters) {
      this.filters[i] = false;
    }
    this.filterAll = false;
    this.filters[filter] = !this.filters[filter];
    this.filteredTasks = this.projectService.tasks.filter((val) => (this.filters[this.filterIcons[val.status].reference] || this.filterAll));
  }

  makeSetDescriptor() {
    this.navValues = [];
    this.projectService.sets.forEach((set) => {
      this.navValues.push({
        id: set.id,
        descriptor: 'Set' + set.number,
        value: set.name,
        status: (set.setCompletion === 0) ? 'Due' : (set.setCompletion === 100 ? 'Completed' : 'In progress'),
        status2: set.setCompletion + '%'
      });
    });
    this.updater.emit(this.navValues);
  }

  toggleAll() {
    for (const i in this.filters) {
      this.filters[i] = false;
    }
    this.filterAll = true;
    this.filteredTasks = this.projectService.tasks.filter((val) => (this.filters[this.filterIcons[val.status].reference] || this.filterAll));
  }

  setSelected(val) {
    this.filteredTasks = [];
    this.getTasks();
  }

}
