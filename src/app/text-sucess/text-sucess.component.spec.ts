import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSucessComponent } from './text-sucess.component';

describe('TextSucessComponent', () => {
  let component: TextSucessComponent;
  let fixture: ComponentFixture<TextSucessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSucessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
