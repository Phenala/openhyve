import { UiService } from './../../services/ui.service';
import { ProjectService } from './../../services/project.service';
import { Project, MyProject} from './../../service-values';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  constructor(public projectService: ProjectService, public ui: UiService) { }

  ngOnInit() {
    this.projectService.getProjects();
  }

}
