import { TaskStatusData } from './../../service-states';
import { Task } from './../../service-values';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  images = [{
    src: '../../../assets/images/svgs/tick-icon.svg',
    description: 'A very stunning scene of gorgeousness'
  },
  {
    src: '../../../assets/images/svgs/progress-icon.svg',
    description: 'A very stunning scene of gorgeousness'
  },
  {
    src: '../../../assets/images/svgs/image-icon.svg',
    description: 'A very stunning scene of gorgeousness'
  }];

  @Input() task: Task;

  statusData = TaskStatusData.status;

  constructor() { }

  ngOnInit() {
  }

}
