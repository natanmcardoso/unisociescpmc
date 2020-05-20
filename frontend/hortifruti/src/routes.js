import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';

function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/cadastrar" component={Cadastro} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes; 