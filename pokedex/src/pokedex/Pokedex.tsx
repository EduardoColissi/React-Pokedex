import React, { useState, useEffect } from "react";
import { getPokemons } from "../pokemon/services/getPokemons";
import { getPokemonInfos } from "../pokemon/services/getPokemonInfos";
import { pokemonListInterface } from "../pokemon/interfaces/pokemonListInterface";

export const Pokedex: React.FC<any> = () => {
  const [pokemons, setPokemons] = useState<pokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<pokemonListInterface | undefined>(undefined);
  const [selectedPokemonInfos, setSelectedPokemonInfos] = useState<any | undefined>(undefined);

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
