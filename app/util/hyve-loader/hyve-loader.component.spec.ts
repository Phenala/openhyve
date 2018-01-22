import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyveLoaderComponent } from './hyve-loader.component';

describe('HyveLoaderComponent', () => {
  let component: HyveLoaderComponent;
  let fixture: ComponentFixture<HyveLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyveLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyveLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
