import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManageTeamsComponent } from './home-manage-teams.component';

describe('HomeManageTeamsComponent', () => {
  let component: HomeManageTeamsComponent;
  let fixture: ComponentFixture<HomeManageTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeManageTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeManageTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
