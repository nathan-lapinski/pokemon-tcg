import { PokemonCardModule } from './pokemon-card.module';

describe('PokemonCardModule', () => {
  let pokemonCardModule: PokemonCardModule;

  beforeEach(() => {
    pokemonCardModule = new PokemonCardModule();
  });

  it('should create an instance', () => {
    expect(pokemonCardModule).toBeTruthy();
  });
});
