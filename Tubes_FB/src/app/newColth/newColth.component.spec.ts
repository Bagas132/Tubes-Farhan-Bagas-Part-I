/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewColthComponent } from './newColth.component';

describe('NewColthComponent', () => {
  let component: NewColthComponent;
  let fixture: ComponentFixture<NewColthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewColthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewColthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
