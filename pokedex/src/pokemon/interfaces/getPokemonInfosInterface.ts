import { pokemonListInterface } from "./pokemonListInterface";

export interface getPokemonInfosInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: pokemonListInterface[];
  }