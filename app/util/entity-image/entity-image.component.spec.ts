/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntityImageComponent } from './entity-image.component';

describe('EntityImageComponent', () => {
  let component: EntityImageComponent;
  let fixture: ComponentFixture<EntityImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
