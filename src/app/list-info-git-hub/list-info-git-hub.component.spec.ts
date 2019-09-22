import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfoGitHubComponent } from './list-info-git-hub.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ListInfoGitHubComponent', () => {
  let component: ListInfoGitHubComponent;
  let fixture: ComponentFixture<ListInfoGitHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInfoGitHubComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfoGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
