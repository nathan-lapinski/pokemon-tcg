import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardDashboardComponent } from './pokemon-card-dashboard/pokemon-card-dashboard.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PokemonCardDashboardComponent, CardComponent],
  exports: [PokemonCardDashboardComponent]
})
export class PokemonCardModule { }
