import axios from "axios";
import { getPokemonsInterface } from "../interfaces/getPokemonsInterface";

export async function getPokemons(): Promise<getPokemonsInterface> {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await axios.get<getPokemonsInterface>(url);

  return response.data;
}
