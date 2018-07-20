import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-deckbuilder-dashboard',
  templateUrl: './deckbuilder-dashboard.component.html',
  styleUrls: ['./deckbuilder-dashboard.component.scss']
})
export class DeckbuilderDashboardComponent implements OnInit {
  public currentDeck: any = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select('pokemon-card')).subscribe(cardData => {
      if (cardData && cardData.currentDeck) {
        this.currentDeck = cardData.currentDeck;
      }
    });
  }

}
