import { PokemonListInterface } from "./pokemonListInterface";

export interface GetPokemonsInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonListInterface[];
  }