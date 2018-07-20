import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PokemonCardModule } from './pokemon-card/pokemon-card.module';
import { SharedModule } from './shared/shared.module';
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
    StoreModule.forRoot({}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
