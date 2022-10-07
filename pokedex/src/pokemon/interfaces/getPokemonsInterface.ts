import { PokemonInfosInterface } from "./pokemonInfosInterface";

export interface GetPokemonsInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonInfosInterface[];
  }