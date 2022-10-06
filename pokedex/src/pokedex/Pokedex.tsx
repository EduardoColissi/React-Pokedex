import React, { useState, useEffect } from "react";
import { getPokemons } from "../pokemon/services/getPokemons";
import { getPokemonInfos } from "../pokemon/services/getPokemonInfos";
import { PokemonListInterface } from "../pokemon/interfaces/pokemonListInterface";
import { PokemonInfosInterface } from "../pokemon/interfaces/pokemonInfosInterface";

export const Pokedex: React.FC<any> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
  const [selectedPokemonInfos, setSelectedPokemonInfos] = useState<PokemonInfosInterface | undefined>(undefined);

  useEffect(() => {
    getPokemons().then((response) => setPokemons(response.results));
  }, []);

  useEffect(() => {
    if (!selectedPokemon) {
      return;
    } else {
      getPokemonInfos(selectedPokemon.name).then((response) => setSelectedPokemonInfos(response));
    }
  }, [selectedPokemon]);

  return (
    <div>
      <h1>Pokedex</h1>
      Pokemons:
      {pokemons.map((pokemon) => (
        <button onClick={() => setSelectedPokemon(pokemon)}>
          {pokemon.name}
        </button>
      ))}
      ;
      <h2>
        Pokemon Selecionado: {selectedPokemon?.name || "Nenhum selecionado."}
      </h2>
      {JSON.stringify(selectedPokemonInfos, undefined, 2)}
    </div>
  );
};
