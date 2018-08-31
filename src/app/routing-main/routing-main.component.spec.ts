import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingMainComponent } from './routing-main.component';

describe('RoutingMainComponent', () => {
  let component: RoutingMainComponent;
  let fixture: ComponentFixture<RoutingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
