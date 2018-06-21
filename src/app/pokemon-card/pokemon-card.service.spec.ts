import { TestBed, inject } from '@angular/core/testing';

import { PokemonCardService } from './pokemon-card.service';

describe('PokemonCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonCardService]
    });
  });

  it('should be created', inject([PokemonCardService], (service: PokemonCardService) => {
    expect(service).toBeTruthy();
  }));
});
