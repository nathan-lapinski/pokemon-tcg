import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonCardModule } from './pokemon-card/pokemon-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PokemonCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
