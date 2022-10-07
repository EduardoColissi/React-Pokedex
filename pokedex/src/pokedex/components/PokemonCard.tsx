import React from 'react';
import styled from "styled-components";
import { PokemonListInterface } from '../../pokemon/interfaces/pokemonListInterface';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography, Chip, Box, Container, Grid  } from '@mui/material';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import { PokemonInfosInterface } from '../../pokemon/interfaces/pokemonInfosInterface';

interface CardProps {
    pokemon: PokemonInfosInterface;
}

// const Card = styled.section `
//   padding: 4em;
//   background: papayawhip;
//   border-radius: .5em;
// `

export const PokemonCard: React.FC<CardProps> = ({ pokemon }) => {

  function handleClick() {
    window.location.href = `/pokemon/${pokemon.name}`;
  }

    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={pokemon.name.toUpperCase()}
        subheader={(
        <Container >
          <Box mt={1}>
            <Grid container spacing={1}>
            {pokemon.types.map((type) => (
              <Grid item >
                <Chip label={type.type.name.toUpperCase()} />
              </Grid>
            ))}
            </Grid>
          </Box>
        </Container>

        )}
      />
      <CardMedia
        component="img"
        height="100%"
        image={pokemon.sprites.front_default}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton onClick={handleClick} aria-label="Mais Informações">
          <InfoTwoToneIcon />
        </IconButton>
      </CardActions>
    </Card>
    );
};

export default PokemonCard;