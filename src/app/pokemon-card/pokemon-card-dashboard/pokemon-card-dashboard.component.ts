import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { PokemonCardService } from '../pokemon-card.service';
import { TestPokemonDataService } from '../test-pokemon-data.service';
import { createRendererV1 } from '../../../../node_modules/@angular/core/src/view/refs';

function remove(item: string, list: string[]) {
  if (list.indexOf(item) !== -1) {
    list.splice(list.indexOf(item), 1);
  }
}

@Component({
  selector: 'app-pokemon-card-dashboard',
  templateUrl: './pokemon-card-dashboard.component.html',
  styleUrls: ['./pokemon-card-dashboard.component.css']
})
export class PokemonCardDashboardComponent implements OnInit {

  // TODO: This is for testing purposes. A Dashboard may not need this property
  public cards = [];

  constructor(private store: Store<any>,
              private cardService: PokemonCardService,
              private testDataService: TestPokemonDataService) { }

  ngOnInit() {
    this.store.pipe(select('pokemon-card')).subscribe(cardData => {
      if (cardData && cardData.currentDeck) {
        this.currentlySelectedCards = cardData.currentDeck;
      }
    });
  }

  // TODO: This is a test function for fetching mock data. It will need to be removed.
  public fetchTestData(): void {
    this.testDataService.getTestData().subscribe(cards => {
      this.cards = cards;
    });
  }

  public fetchTestPack(): void {
    this.testDataService.getPack().subscribe(cards => {
      this.cards = this.cards.concat(cards);
    });
  }

  public fetchPokemon(name: string): void {
    this.cardService.getCardsByName(name).subscribe(cards => {
      this.cards = cards;
    });
  }

  public fetchPokemonBySet(set: string): void {
    this.cardService.getCardsBySet(set).subscribe(cards => {
      this.cards = cards;
    });
  }

  // TODO: Should probably find a better home for these guys, or pass a sort function into Array.prototype.sort
  public sortBySuperType(): void {
    const superTypeTable = {
      'Pokémon': 0,
      'Trainer': 1,
      'Energy': 2
    };

    this.cards.sort((card1, card2) => {
      return superTypeTable[card1.supertype] - superTypeTable[card2.supertype];
    });
  }

  // TODO: This is a festering pile of ineffeciency. Also, it will break with newer versions of the game, which have more color/types
  public sortByColor(): void {
    const pokemonColorTable = {
      'Colorless': 0,
      'Fighting': 1,
      'Fire': 2,
      'Grass': 3,
      'Lightning': 4,
      'Psychic': 5,
      'Water': 6
    };

    this.sortBySuperType();
    this.cards.sort((card1, card2) => {
      if (card1.types && card2.types) {
        return pokemonColorTable[card1.types[0]] - pokemonColorTable[card2.types[0]];
      } else {
        return 0;
      }
    });
  }

  public sortByRarity(): void {
    const rarityTable = {
      'Rare': 0,
      'Uncommon': 1,
      'Common': 2
    };

    this.cards.sort((card1, card2) => {
      return rarityTable[card1.rarity] - rarityTable[card2.rarity];
    });
  }


  currentlySelectedCards = [
  ];

  currentBox?: string;

  // TODO: Need to rename these params. Box is the card, and toList is the array that it's being sent to
  public move(box: string, toList: string[]): void {

    if (toList === this.currentlySelectedCards) {
      remove(box, this.cards);
    } else {
      remove(box, this.currentlySelectedCards);
    }

    toList.push(box);
    this.store.dispatch({
      type: 'UPDATE_CURRENT_DECK',
      payload: this.currentlySelectedCards
    });
  }

}
