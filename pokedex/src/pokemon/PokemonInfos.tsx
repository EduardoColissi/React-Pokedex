import React, {useState, useEffect} from 'react';
import { PokemonInfosInterface } from './interfaces/pokemonInfosInterface';

interface PokemonInfosProps {
    
}

export const PokemonInfos: React.FC<PokemonInfosProps> = () => {
    const [selectedPokemonInfos, setSelectedPokemonInfos] = useState<PokemonInfosInterface | undefined>(undefined);

    // useEffect(() => {
    //     if (!selectedPokemon) {
    //       return;
    //     } else {
    //       getPokemonInfos(selectedPokemon.name).then((response) => setSelectedPokemonInfos(response));
    //     }
    //   }, [selectedPokemon]);

    return (
        <>
            <h2>
                {/* Pokemon Selecionado: {selectedPokemon?.name || "Nenhum selecionado."} */}
            </h2>
            {JSON.stringify(selectedPokemonInfos, undefined, 2)}
        </>
    );
};

export default PokemonInfos;