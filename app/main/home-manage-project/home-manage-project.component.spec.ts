import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManageProjectComponent } from './home-manage-project.component';

describe('HomeManageProjectComponent', () => {
  let component: HomeManageProjectComponent;
  let fixture: ComponentFixture<HomeManageProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeManageProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeManageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
