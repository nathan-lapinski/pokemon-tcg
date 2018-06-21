import { Injectable } from '@angular/core';

import { PokemonTcgApiConfig } from './pokemon-tcg-api-config';
import { SharedModule } from './shared.module';


@Injectable({
  providedIn: SharedModule
})
export class UrlBuilderService {

  constructor() { }

  // TODO: Make this more generic
  buildUrl(name: string): string {
    return PokemonTcgApiConfig.API_URL + '/v' + PokemonTcgApiConfig.version + '/' + 'cards?name=' + name;
  }
}
