import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonCardDashboardComponent } from './pokemon-card-dashboard/pokemon-card-dashboard.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

import { DraggableModule } from '../draggable/draggable.module';
import { SelectedPokemonCardInfoComponent } from './selected-pokemon-card-info/selected-pokemon-card-info.component';

@NgModule({
  imports: [
    CommonModule,
    DraggableModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'sealed', component: PokemonCardDashboardComponent }
    ])
  ],
  declarations: [PokemonCardDashboardComponent, CardComponent, SelectedPokemonCardInfoComponent],
  exports: [PokemonCardDashboardComponent]
})
export class PokemonCardModule { }
