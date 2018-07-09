import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPokemonCardInfoComponent } from './selected-pokemon-card-info.component';

describe('SelectedPokemonCardInfoComponent', () => {
  let component: SelectedPokemonCardInfoComponent;
  let fixture: ComponentFixture<SelectedPokemonCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPokemonCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPokemonCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
