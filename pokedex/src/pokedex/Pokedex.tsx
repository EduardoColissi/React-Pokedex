import React, { useState, useEffect, useMemo } from "react";
import { getPokemons } from "../pokemon/services/getPokemons";
import { AppBar, Toolbar, Typography, Container, Box, Grid, TextField  } from '@mui/material';
import PokemonCard from "./components/PokemonCard";
import { PokemonInfosInterface } from "../pokemon/interfaces/pokemonInfosInterface";
import { PokedexProps } from "./interfaces/componentsInterfaces";


export const Pokedex: React.FC<PokedexProps> = () => {
  //Definição de estados utilizando useState
  const [pokemons, setPokemons] = useState<PokemonInfosInterface[]>([]);
  const [busca, setBusca] = useState<string>('');

  //Função de busca e filtro
  const PokemonsFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(lowerBusca));
  }, [busca]);

  // useEffect responsável por trazer os pokemons ao carregar a pagina
  useEffect(() => { 
    getPokemons().then((response) => setPokemons(response.results));
  }, []);

  let render;

  //If para definir se a página trará os pokemons definidos pela busca ou, caso não tenha, trazer todos os pokemons
  if (PokemonsFiltrados.length === 0) {
    render = pokemons;
  } else {
    render = PokemonsFiltrados;
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
          <Box mt={3}>
            <Grid container>
              <Grid item xs={8} lg={10} marginLeft={10} padding={0}>
                <TextField size='medium' fullWidth id="outlined-search" label="Pesquisar Pokemons" type="search" value={busca} onChange={(ev) => setBusca(ev.target.value)} />
              </Grid>
            </Grid>
          </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
          {render.map((pokemon) => (
            <Grid item xs={6} lg={4} key={pokemon.name}>
              <PokemonCard pokemon={pokemon}/>
            </Grid>
          ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
