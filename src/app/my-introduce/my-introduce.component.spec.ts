/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyIntroduceComponent } from './my-introduce.component';

describe('MyIntroduceComponent', () => {
  let component: MyIntroduceComponent;
  let fixture: ComponentFixture<MyIntroduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIntroduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
