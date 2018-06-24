import { Ability } from '../interfaces/ability';
import { Attack } from '../interfaces/attack';
import { Set } from '../interfaces/set';
import { SubType } from '../interfaces/subType';
import { SuperType } from '../interfaces/superType';
import { Type } from '../interfaces/type';

export interface Card {
  id: number;
  name: string;
  imageUrl: string;
  imageUrlHighRes: string;
  subType: SubType;
  superType: SuperType;
  ability: Ability;
  hp: number;
  number: number;
  artist: string;
  rarity: string;
  series: string;
  set: Set;
  setCode: string;
  retreatCost: string;  
  text: string;
  types: Type[];
  attacks: Attack[];
  weaknesses: string[];
  resistances: string[];
  nationalPokedexNumber: number;
  ancientTrait: string;
  evolvesFrom: string;
}