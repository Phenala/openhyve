import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStageDetailComponent } from './project-stage-detail.component';

describe('ProjectStageDetailComponent', () => {
  let component: ProjectStageDetailComponent;
  let fixture: ComponentFixture<ProjectStageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
