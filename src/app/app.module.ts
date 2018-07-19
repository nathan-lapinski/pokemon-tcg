import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonCardModule } from './pokemon-card/pokemon-card.module';
import { SharedModule } from './shared/shared.module';
import { DeckbuilderModule } from './deckbuilder/deckbuilder.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    PokemonCardModule,
    SharedModule,
    DeckbuilderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
