import { DeckbuilderModule } from './deckbuilder.module';

describe('DeckbuilderModule', () => {
  let deckbuilderModule: DeckbuilderModule;

  beforeEach(() => {
    deckbuilderModule = new DeckbuilderModule();
  });

  it('should create an instance', () => {
    expect(deckbuilderModule).toBeTruthy();
  });
});
