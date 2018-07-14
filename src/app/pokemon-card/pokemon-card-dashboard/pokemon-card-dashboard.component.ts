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
  public sortByType(): void {
    // TODO: Implement
  }


  dropzone = [
  ];

  currentBox?: string;

  // TODO: Need to rename these params. Box is the card, and toList is the array that it's being sent to
  public move(box: string, toList: string[]): void {

    if (toList === this.dropzone) {
      remove(box, this.cards);
    } else {
      remove(box, this.dropzone);
    }

    toList.push(box);
  }

}
