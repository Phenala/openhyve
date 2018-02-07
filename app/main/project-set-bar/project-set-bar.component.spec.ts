import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSetBarComponent } from './project-set-bar.component';

describe('ProjectSetBarComponent', () => {
  let component: ProjectSetBarComponent;
  let fixture: ComponentFixture<ProjectSetBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSetBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSetBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
