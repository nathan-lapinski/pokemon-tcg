import { Component, OnInit } from '@angular/core';
import { PokemonCardService } from '../pokemon-card.service';

@Component({
  selector: 'app-pokemon-card-dashboard',
  templateUrl: './pokemon-card-dashboard.component.html',
  styleUrls: ['./pokemon-card-dashboard.component.css']
})
export class PokemonCardDashboardComponent implements OnInit {

  // TODO: This is for testing purposes. A Dashboard may not need this property
  public cards = [];

  constructor(private cardService: PokemonCardService) { }

  ngOnInit() {}

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

}
