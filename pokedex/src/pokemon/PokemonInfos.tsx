import React, { useState, useEffect } from 'react';
import { PokemonInfosInterface } from './interfaces/pokemonInfosInterface';
import { AppBar, Toolbar, Typography, Container, Box, IconButton, Card, CardMedia, Grid, CardHeader, Chip, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getPokemonInfos } from './services/getPokemonInfos';
import { PieChart, Pie, Tooltip } from 'recharts';
import { PokemonInfosProps, PokemonQueryParams } from './interfaces/componentsInterfaces';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const PokemonInfos: React.FC<PokemonInfosProps> = () => {
    const [selectedPokemonInfos, setSelectedPokemonInfos] = useState<PokemonInfosInterface | undefined>(undefined);
    const { name } = useParams<PokemonQueryParams>();

    let color;

  switch(selectedPokemonInfos?.types[0].type.name){
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
      color = "#65788a";
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

    const dataGraph = [
        {
            name: 'Peso',
            value: selectedPokemonInfos?.weight
        },
        {
            name: 'Altura',
            value: selectedPokemonInfos?.height
        }
    ]
    
    useEffect(() => {
        if (!name) {
          return;
        } else {
          getPokemonInfos(name).then((response) => setSelectedPokemonInfos(response));
        }
      }, [name]);

    const CardStyled = styled(Card) `
        text-align: center;
        max-width: 500px;
        max-height: 800px;
        background-color: #dbdbdb; 
    `

    const CardHeaderStyled = styled(CardHeader)`
        background-color: ${color};
        height: 100px;
    `
    
    function handleClick() {
        window.location.href = `/`;
      }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {name.toUpperCase()}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg">
                <Box mt={3}>
                    <Grid container>
                        <Grid item xs={6} lg={6} >
                            <CardStyled>
                                <CardHeaderStyled 
                                title={selectedPokemonInfos?.name.toUpperCase()}
                                subheader={(
                                    <Container >
                                    <Box mt={1}>
                                        <Grid container spacing={1}>
                                        {selectedPokemonInfos?.types.map((type) => (
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
                                image={selectedPokemonInfos?.sprites.front_default}
                                alt="Paella dish"
                                />
                            </CardStyled>
                        </Grid>
                        <Grid item xs={6} lg={6} >
                            <CardStyled>
                                <CardHeaderStyled 
                                title={selectedPokemonInfos?.name.toUpperCase() + " STATUS"}
                                subheader={(
                                    <Container >
                                    <Box mt={1}>
                                        <Grid container spacing={1}>
                                        {selectedPokemonInfos?.stats.map((stat)=> (
                                        <Grid item >
                                            <Chip label={stat.stat.name.toUpperCase() + ":" + stat.base_stat} />
                                        </Grid>
                                        ))}
                                        </Grid>
                                    </Box>
                                    </Container>)} />
                                <CardContent>
                                    <PieChart width={400} height={400}>
                                        <Pie dataKey='value' isAnimationActive={false} data={dataGraph} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                                        <Tooltip />
                                    </PieChart>
                                </CardContent>
                            </CardStyled>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            {/* <Container maxWidth="lg">
                <Box mt={2}>
                    <img width='90%' height='auto' src={selectedPokemonInfos?.sprites.front_default} alt="" />
                </Box>
                <Typography variant='h2'>
                    {selectedPokemonInfos?.name}
                </Typography>

                <Box display="flex" flexDirection="row">
                    <Typography>
                        Espécie:
                    </Typography>
                    <Typography>
                        {selectedPokemonInfos?.species.name}
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Typography>
                        Altura:
                    </Typography>
                    <Typography>
                    {selectedPokemonInfos?.height}
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="row">
                    <Typography>
                        Peso:
                    </Typography>
                    <Typography>
                    {selectedPokemonInfos?.weight} 
                    </Typography>
                </Box> 
            </Container>
            <PieChart width={400} height={400}>
                <Pie dataKey='value' isAnimationActive={false} data={dataGraph} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
            </PieChart> */}
        </div>
    );
};

export default PokemonInfos;