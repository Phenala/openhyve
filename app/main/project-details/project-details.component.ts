import { ProjectService } from './../../services/project.service';
import { MyProject, HorizontalNavVal } from './../../service-values';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() myproject: MyProject;


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

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
  }

}
