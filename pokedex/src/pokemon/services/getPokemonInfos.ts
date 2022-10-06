import axios from "axios";
import { getPokemonInfosInterface } from "../interfaces/getPokemonInfosInterface";


export async function getPokemonInfos(name: string): Promise<getPokemonInfosInterface> {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await axios.get<getPokemonInfosInterface>(url);

  return response.data;
}
