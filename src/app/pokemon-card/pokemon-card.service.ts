import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// TODO: This can probably be moved to a URL Builder class
import { UrlBuilderService } from '../shared/url-builder.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardService {

  constructor(private urlBuilderService: UrlBuilderService) { }

  // TODO: Both of these get methods are kind of gross and should be reconsidered. It could be problematic
  // to have a different get method for each type of resource.
  getCardsByName(name: string): Observable<any> {
    const url = this.urlBuilderService.buildUrl(name);
    return ajax.get(url).pipe(
      map(res => res.response.cards)
    );
  }

  getCardsBySet(set: string): Observable<any> {
    const url = this.urlBuilderService.buildSetUrl(set);
    return ajax.get(url).pipe(
      map(res => res.response.cards)
    );
  }
}
