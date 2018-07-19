import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeckbuilderDashboardComponent } from './deckbuilder-dashboard/deckbuilder-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'deckbuilder', component: DeckbuilderDashboardComponent },
    ])
  ],
  declarations: [DeckbuilderDashboardComponent]
})
export class DeckbuilderModule { }
