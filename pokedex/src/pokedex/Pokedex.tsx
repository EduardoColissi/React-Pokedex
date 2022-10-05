import React, { useState, useEffect } from "react";
import axios from "axios";

interface PokedexProps {}

interface PokemonListInterface {
  name: string;
  url: string;
}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonListInterface | undefined
  >(undefined);
  const [selectedPokemonInfos, setSelectedPokemonInfos] = useState<
    any | undefined
  >(undefined);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => setPokemons(response.data.results));
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`)
      .then((response) => setSelectedPokemonInfos(response.data));
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
