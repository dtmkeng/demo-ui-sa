import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListResverComponent } from './card-list-resver.component';

describe('CardListResverComponent', () => {
  let component: CardListResverComponent;
  let fixture: ComponentFixture<CardListResverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListResverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListResverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
