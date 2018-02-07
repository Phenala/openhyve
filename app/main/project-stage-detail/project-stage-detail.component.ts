import { ProjectService } from './../../services/project.service';
import { HorizontalNavVal, Stage } from './../../service-values';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-stage-detail',
  templateUrl: './project-stage-detail.component.html',
  styleUrls: ['./project-stage-detail.component.scss']
})
export class ProjectStageDetailComponent implements OnInit {

  navValues: HorizontalNavVal[] = [];

  updater = new EventEmitter<any[]>();
  selectedStage: Stage;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getStages().then((val) => {
      this.makeStageDescriptor();
      this.updater.emit(this.navValues);
    });
  }

  makeStageDescriptor() {
    this.projectService.stages.forEach((val) => {
      this.navValues.push({
        id: val.id,
        descriptor: 'Stage ' + val.stageNo,
        value: val.stage,
        status: val.stageValue === 0 ? 'Due' : (val.stageValue === 100 ? 'Complete' : 'In progress'),
        status2: val.stageValue + ''
      });
    });
  }

  selectStage(id) {
    this.selectedStage = this.projectService.stages.find((stage) => stage.id === id);
  }

}
