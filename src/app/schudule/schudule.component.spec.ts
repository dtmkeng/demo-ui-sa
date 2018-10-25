import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuduleComponent } from './schudule.component';

describe('SchuduleComponent', () => {
  let component: SchuduleComponent;
  let fixture: ComponentFixture<SchuduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchuduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchuduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
