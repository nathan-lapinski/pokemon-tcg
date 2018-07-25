import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/pokemon-card.reducer';

import { PokemonCardDashboardComponent } from './pokemon-card-dashboard/pokemon-card-dashboard.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

import { DraggableModule } from '../draggable/draggable.module';
import { SelectedPokemonCardInfoComponent } from './selected-pokemon-card-info/selected-pokemon-card-info.component';
import { DeckbuilderDashboardComponent } from './deckbuilder-dashboard/deckbuilder-dashboard.component';
import { DeckEditorComponent } from './deck-editor/deck-editor.component';

@NgModule({
  imports: [
    CommonModule,
    DraggableModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'sealed', component: PokemonCardDashboardComponent },
      { path: 'deckbuilder', component: DeckbuilderDashboardComponent },
    ]),
    StoreModule.forFeature('pokemon-card', reducer)
  ],
  declarations: [PokemonCardDashboardComponent, CardComponent, SelectedPokemonCardInfoComponent, DeckbuilderDashboardComponent, DeckEditorComponent],
  exports: [PokemonCardDashboardComponent]
})
export class PokemonCardModule { }
