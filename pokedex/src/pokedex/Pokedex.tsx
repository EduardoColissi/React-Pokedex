import React, { useState, useEffect, useMemo } from "react";
import { getPokemons } from "../pokemon/services/getPokemons";
import { PokemonListInterface } from "../pokemon/interfaces/pokemonListInterface";
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, IconButton, Pagination, PaginationItem, TextField  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PokemonCard from "./components/PokemonCard";
import { PokemonInfosInterface } from "../pokemon/interfaces/pokemonInfosInterface";


export const Pokedex: React.FC<any> = () => {
  const [pokemons, setPokemons] = useState<PokemonInfosInterface[]>([]);
  const [busca, setBusca] = useState<string>('');
  let render;

  const PokemonsFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(lowerBusca));
  }, [busca]);

  useEffect(() => { 
    getPokemons().then((response) => setPokemons(response.results));
  }, []);
  
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
              <Grid item xs={6} lg={6}>
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
