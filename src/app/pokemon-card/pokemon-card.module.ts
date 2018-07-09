import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardDashboardComponent } from './pokemon-card-dashboard/pokemon-card-dashboard.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

import { DraggableModule } from '../draggable/draggable.module';

@NgModule({
  imports: [
    CommonModule,
    DraggableModule,
    SharedModule
  ],
  declarations: [PokemonCardDashboardComponent, CardComponent],
  exports: [PokemonCardDashboardComponent]
})
export class PokemonCardModule { }
