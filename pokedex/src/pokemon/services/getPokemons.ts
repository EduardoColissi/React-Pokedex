import axios from "axios";
import { GetPokemonsInterface } from "../interfaces/getPokemonsInterface";

export async function getPokemons(): Promise<GetPokemonsInterface> {
  const url = `${process.env.REACT_APP_POKEAPI}/pokemon`;
  const response = await axios.get<GetPokemonsInterface>(url);

  return response.data;
}
