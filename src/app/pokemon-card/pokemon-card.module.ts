import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardDashboardComponent } from './pokemon-card-dashboard/pokemon-card-dashboard.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

import { DraggableModule } from '../draggable/draggable.module';
import { SelectedPokemonCardInfoComponent } from './selected-pokemon-card-info/selected-pokemon-card-info.component';

@NgModule({
  imports: [
    CommonModule,
    DraggableModule,
    SharedModule
  ],
  declarations: [PokemonCardDashboardComponent, CardComponent, SelectedPokemonCardInfoComponent],
  exports: [PokemonCardDashboardComponent]
})
export class PokemonCardModule { }
