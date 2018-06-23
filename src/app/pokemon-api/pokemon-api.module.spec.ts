import { PokemonApiModule } from './pokemon-api.module';

describe('PokemonApiModule', () => {
  let pokemonApiModule: PokemonApiModule;

  beforeEach(() => {
    pokemonApiModule = new PokemonApiModule();
  });

  it('should create an instance', () => {
    expect(pokemonApiModule).toBeTruthy();
  });
});
