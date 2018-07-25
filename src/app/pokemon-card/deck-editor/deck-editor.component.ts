import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/interfaces/card';

@Component({
  selector: 'app-deck-editor',
  templateUrl: './deck-editor.component.html',
  styleUrls: ['./deck-editor.component.scss']
})
export class DeckEditorComponent implements OnInit {
  @Input() currentDeck: any; // TODO: Add typing for a deck
  @Output() addCard = new EventEmitter<Card>();

  // TODO: Remove this hardcoded data. For testing purposes only
  private energyCards: any[] = [
    {
      'id': 'base1-97',
      'name': 'Fighting Energy',
      'imageUrl': 'https://images.pokemontcg.io/base1/97.png',
      'subtype': 'Basic',
      'supertype': 'Energy',
      'number': '97',
      'artist': 'Keiji Kinebuchi',
      'rarity': 'Common',
      'series': 'Base',
      'set': 'Base',
      'setCode': 'base1',
      'imageUrlHiRes': 'https://images.pokemontcg.io/base1/97_hires.png'
    },
    {
      'id': 'base1-98',
      'name': 'Fire Energy',
      'imageUrl': 'https://images.pokemontcg.io/base1/98.png',
      'subtype': 'Basic',
      'supertype': 'Energy',
      'number': '98',
      'artist': 'Keiji Kinebuchi',
      'rarity': 'Common',
      'series': 'Base',
      'set': 'Base',
      'setCode': 'base1',
      'imageUrlHiRes': 'https://images.pokemontcg.io/base1/98_hires.png'
    },
    {
      'id': 'base1-99',
      'name': 'Grass Energy',
      'imageUrl': 'https://images.pokemontcg.io/base1/99.png',
      'subtype': 'Basic',
      'supertype': 'Energy',
      'number': '99',
      'artist': 'Keiji Kinebuchi',
      'rarity': 'Common',
      'series': 'Base',
      'set': 'Base',
      'setCode': 'base1',
      'imageUrlHiRes': 'https://images.pokemontcg.io/base1/99_hires.png'
    },
    {
      'id': 'base1-100',
      'name': 'Lightning Energy',
      'imageUrl': 'https://images.pokemontcg.io/base1/100.png',
      'subtype': 'Basic',
      'supertype': 'Energy',
      'number': '100',
      'artist': 'Keiji Kinebuchi',
      'rarity': 'Common',
      'series': 'Base',
      'set': 'Base',
      'setCode': 'base1',
      'imageUrlHiRes': 'https://images.pokemontcg.io/base1/100_hires.png'
    },
    {
      'id': 'base1-101',
      'name': 'Psychic Energy',
      'imageUrl': 'https://images.pokemontcg.io/base1/101.png',
      'subtype': 'Basic',
      'supertype': 'Energy',
      'number': '101',
      'artist': 'Keiji Kinebuchi',
      'rarity': 'Common',
      'series': 'Base',
      'set': 'Base',
      'setCode': 'base1',
      'imageUrlHiRes': 'https://images.pokemontcg.io/base1/101_hires.png'
    },
    {
      'id': 'base1-102',
      'name': 'Water Energy',
      'imageUrl': 'https://images.pokemontcg.io/base1/102.png',
      'subtype': 'Basic',
      'supertype': 'Energy',
      'number': '102',
      'artist': 'Keiji Kinebuchi',
      'rarity': 'Common',
      'series': 'Base',
      'set': 'Base',
      'setCode': 'base1',
      'imageUrlHiRes': 'https://images.pokemontcg.io/base1/102_hires.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public addEnergy(type: string): void {
    const card: Card = this.energyCards.find((energy: Card) => energy.name === type);
    this.addCard.emit(card);
  }

}
