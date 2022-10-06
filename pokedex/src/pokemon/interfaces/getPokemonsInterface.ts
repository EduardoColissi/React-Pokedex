import { pokemonListInterface } from "./pokemonListInterface";

export interface getPokemonsInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: pokemonListInterface[];
  }