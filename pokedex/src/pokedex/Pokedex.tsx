import React from "react";
import { useState } from "react";

interface PokedexProps {}

const array: string[] = ["Pikachu", "Raichu"];

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<string[]>(array);
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>(
    undefined
  );

  return (
    <div>
      <h1>Pokedex</h1>
      <h1>Pokemons:</h1>
      {pokemons.map((pokemon) => (
        <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon}</button>
      ))}
      <h2>
        Pokemon Selecionado:
        {selectedPokemon ? selectedPokemon : "Nenhum selecionado."}
      </h2>
    </div>
  );
};
