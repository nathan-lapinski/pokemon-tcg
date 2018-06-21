import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// TODO: This can probably be moved to a URL Builder class
import { PokemonTcgApiConfig } from './pokemon-tcg-api-config';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardService {

  constructor() { }

  // TODO: For now, this function is hardcoded to return card data by name.
  get(name: string): Observable<any> {
    // TODO: This is gross. Need a URL Builder class.
    const url = PokemonTcgApiConfig.API_URL + '/v' + PokemonTcgApiConfig.version + '/' + 'cards?name=' + name;
    return ajax.get(url).pipe(
      map(res => res.response.cards)
    );
  }
}
