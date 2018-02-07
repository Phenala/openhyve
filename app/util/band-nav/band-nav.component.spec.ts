import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandNavComponent } from './band-nav.component';

describe('BandNavComponent', () => {
  let component: BandNavComponent;
  let fixture: ComponentFixture<BandNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
