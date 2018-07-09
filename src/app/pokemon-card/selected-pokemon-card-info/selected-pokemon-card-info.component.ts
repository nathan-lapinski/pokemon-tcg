import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-pokemon-card-info',
  templateUrl: './selected-pokemon-card-info.component.html',
  styleUrls: ['./selected-pokemon-card-info.component.scss']
})
export class SelectedPokemonCardInfoComponent implements OnInit {
  @Input() selectedPokemon;

  constructor() { }

  ngOnInit() {
  }

}
