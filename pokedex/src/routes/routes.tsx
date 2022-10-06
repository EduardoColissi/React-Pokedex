
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Pokedex } from '../pokedex/Pokedex';
import PokemonInfos from '../pokemon/PokemonInfos';

interface RoutesProps {
    
}

export const Routes: React.FC<RoutesProps> = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Pokedex />
                </Route>
                <Route exact path="/pokemon">
                    <PokemonInfos />
                </Route>
            </Switch>
        </>
    );
};

function Users() {
    return <h1>teste</h1>
}
export default Routes;