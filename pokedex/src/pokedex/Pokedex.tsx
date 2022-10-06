import React, { useState, useEffect } from "react";
import { getPokemons } from "../pokemon/services/getPokemons";
import { getPokemonInfos } from "../pokemon/services/getPokemonInfos";
import { PokemonListInterface } from "../pokemon/interfaces/pokemonListInterface";
import { PokemonInfosInterface } from "../pokemon/interfaces/pokemonInfosInterface";
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardActions, CardContent, IconButton  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

export const Pokedex: React.FC<any> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);

  useEffect(() => {
    getPokemons().then((response) => setPokemons(response.results));
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box mt={1}>
          <Grid container spacing={2}>
          {pokemons.map((pokemon) => (
            <Grid item xs={6} lg={4} key={pokemon.name}>
              <Card key={pokemon.name}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {pokemon.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton onClick={() => setSelectedPokemon(pokemon)} size="small">
                    <InfoTwoToneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
