import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardDashboardComponent } from './pokemon-card-dashboard.component';

describe('PokemonCardDashboardComponent', () => {
  let component: PokemonCardDashboardComponent;
  let fixture: ComponentFixture<PokemonCardDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCardDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
