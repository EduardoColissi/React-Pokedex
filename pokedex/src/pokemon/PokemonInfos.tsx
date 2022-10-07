import React, {useState, useEffect} from 'react';
import { PokemonInfosInterface } from './interfaces/pokemonInfosInterface';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardActions, CardContent, IconButton  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useParams } from 'react-router-dom';
import { getPokemonInfos } from './services/getPokemonInfos';

interface PokemonInfosProps {
     
}

interface PokemonQueryParams {
    name: string;
}

export const PokemonInfos: React.FC<PokemonInfosProps> = () => {
    const [selectedPokemonInfos, setSelectedPokemonInfos] = useState<PokemonInfosInterface | undefined>(undefined);
    const { name } = useParams<PokemonQueryParams>();
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
                    {name}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg">
                <Box mt={2}>
                    <img src={selectedPokemonInfos?.sprites.front_default} alt="" />
                </Box>
            </Container>
        </div>
    );
};

export default PokemonInfos;