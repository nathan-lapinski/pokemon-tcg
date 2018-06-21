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

  // TODO: For now, this function is hardcoded to return card data by name.
  get(name: string): Observable<any> {
    const url = this.urlBuilderService.buildUrl(name);
    return ajax.get(url).pipe(
      map(res => res.response.cards)
    );
  }
}
