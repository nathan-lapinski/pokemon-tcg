import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckbuilderDashboardComponent } from './deckbuilder-dashboard.component';

describe('DeckbuilderDashboardComponent', () => {
  let component: DeckbuilderDashboardComponent;
  let fixture: ComponentFixture<DeckbuilderDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckbuilderDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckbuilderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
