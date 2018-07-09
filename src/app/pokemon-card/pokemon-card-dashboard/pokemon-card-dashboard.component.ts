import { Component, OnInit } from '@angular/core';
import { PokemonCardService } from '../pokemon-card.service';
import { TestPokemonDataService } from '../test-pokemon-data.service';


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

  constructor(private cardService: PokemonCardService,
              private testDataService: TestPokemonDataService) { }

  ngOnInit() {}

  // TODO: This is a test function for fetching mock data. It will need to be removed.
  public fetchTestData(): void {
    this.testDataService.getTestData().subscribe(cards => {
      this.cards = cards;
    });
  }

  public fetchTestPack(): void {
    this.testDataService.getPack().subscribe(cards => {
      this.cards = cards;
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

  // Experimental drag/drop lib test
  // TODO: This all needs to be refactored

  dropzone1 = [
  ];

  currentBox?: string;

  public move(box: string, toList: string[]): void {
    remove(box, this.cards);
    remove(box, this.dropzone1);

    toList.push(box);
  }

}
