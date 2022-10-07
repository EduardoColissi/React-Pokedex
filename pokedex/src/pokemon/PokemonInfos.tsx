import React, {useState, useEffect, PureComponent} from 'react';
import { PokemonInfosInterface } from './interfaces/pokemonInfosInterface';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardActions, CardContent, IconButton, Paper  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useParams } from 'react-router-dom';
import { getPokemonInfos } from './services/getPokemonInfos';
import {PieChart, Pie, Tooltip} from 'recharts';

interface PokemonInfosProps {
     
}

interface PokemonQueryParams {
    name: string;
}



export const PokemonInfos: React.FC<PokemonInfosProps> = () => {
    const [selectedPokemonInfos, setSelectedPokemonInfos] = useState<PokemonInfosInterface | undefined>(undefined);
    const { name } = useParams<PokemonQueryParams>();

    const data = [
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

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {name.toUpperCase()}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg">
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
                <Pie dataKey='value' isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default PokemonInfos;