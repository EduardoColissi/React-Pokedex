import React from 'react';
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Chip, Box, Container, Grid  } from '@mui/material';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { PokemonCardProps } from '../interfaces/componentsInterfaces';
import styled from "styled-components";

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  let color;

  //Switch case responsável por atribuir a vaariável color uma cor de acordo com o tipo do pokemon em questão
  switch(pokemon.types[0].type.name){
    case "normal":
      color = "#c95e57";
      break;
    
    case "fighting":
      color = "#d96f41";
      break;

    case "flying":
      color = "#41a4d9";
      break;
      
    case "poison":
      color = "#6f41d9";
      break;  
    
    case "ground":
      color = "#b5702b";
      break;
      
    case "rock":
      color = "#80441f";
      break;

    case "bug":
      color = "#277529";
      break;

    case "ghost":
      color = "#363294";
      break;

    case "steel":
      color = "#65768a";
      break;

    case "fire":
      color = "#b32e29";
      break;

    case "water":
      color = "#217ad9";
      break;

    case "grass":
      color = "#4bbd55";
      break;

    case "electric":
      color = "#f7ec59";
      break;
              
    case "psychic":
      color = "#a840a7";
      break;

    case "ice":
      color = "#7dbec7";
      break;

    case "dragon":
      color = "#3a8791";
      break;

    case "dark":
      color = "#3e245c";
      break;

    case "fairy":
      color = "#a81d5e";
      break;
  }

  //Estilização do componente Card do MaterialUI utilizando Styled-components
  const CardStyled = styled(Card)`
    text-align: center;
    max-width: 355px;
    background-color: #dbdbdb; 
  `;

  //Estilização do componente CardHeader do MaterialUI utilizando Styled-components
  const CardHeaderStyled = styled(CardHeader)`
    background-color: ${color};
  `

  //Função handleClick responsável por redirecionar o usuário para os detalhes do pokemon escolhido
  function handleClick() {
    window.location.href = `/pokemon/${pokemon.name}`;
  }

    return (
      <CardStyled>
        <CardHeaderStyled 
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
            </Container>)} />
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
    </CardStyled>
    );
};

export default PokemonCard;