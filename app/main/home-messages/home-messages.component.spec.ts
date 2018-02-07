import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMessagesComponent } from './home-messages.component';

describe('HomeMessagesComponent', () => {
  let component: HomeMessagesComponent;
  let fixture: ComponentFixture<HomeMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
