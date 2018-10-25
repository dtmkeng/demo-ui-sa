import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermComponent } from './conferm.component';

describe('ConfermComponent', () => {
  let component: ConfermComponent;
  let fixture: ComponentFixture<ConfermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
