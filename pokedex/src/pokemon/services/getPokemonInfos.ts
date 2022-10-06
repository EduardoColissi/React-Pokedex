import axios from "axios";
import { PokemonInfosInterface } from "../interfaces/pokemonInfosInterface";


export async function getPokemonInfos(name: string): Promise<PokemonInfosInterface> {
  const url = `${process.env.REACT_APP_POKEAPI}/${name}`;
  const response = await axios.get<PokemonInfosInterface>(url);

  return response.data;
}
