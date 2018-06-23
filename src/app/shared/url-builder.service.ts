import { Injectable } from '@angular/core';

import { PokemonTcgApiConfig } from './pokemon-tcg-api-config';
import { SharedModule } from './shared.module';


@Injectable({
  providedIn: SharedModule
})
export class UrlBuilderService {

  constructor() { }

  // TODO: Make this more generic
  public buildUrl(name: string): string {
    return PokemonTcgApiConfig.API_URL + '/v' + PokemonTcgApiConfig.version + '/' + 'cards?name=' + name;
  }

  // TODO: TESTING ONLY. This should be removed. Don't want different methods for building urls.
  public buildSetUrl(set: string): string {
    return PokemonTcgApiConfig.API_URL + '/v' + PokemonTcgApiConfig.version + '/' + 'cards?setCode=' + set;
  }
}
