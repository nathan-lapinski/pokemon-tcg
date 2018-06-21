import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardDashboardComponent } from './pokemon-card-dashboard/pokemon-card-dashboard.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PokemonCardDashboardComponent, CardComponent],
  exports: [PokemonCardDashboardComponent]
})
export class PokemonCardModule { }
