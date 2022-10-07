import axios from "axios";
import { GetPokemonsInterface } from "../interfaces/getPokemonsInterface";
import { getPokemonInfos } from "./getPokemonInfos";

export async function getPokemons(): Promise<GetPokemonsInterface> {
  const url = `${process.env.REACT_APP_POKEAPI}/pokemon?limit=300&offset=0`;
  const response = await axios.get<GetPokemonsInterface>(url);

  const promiseArray = response.data.results.map(({ name }) => getPokemonInfos(name));
  const resultsPromise = await Promise.all(promiseArray);

  return {
    ...response.data,
    results: resultsPromise
  };
}
