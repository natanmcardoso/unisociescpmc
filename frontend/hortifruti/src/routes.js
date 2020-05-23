import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './paginas/Login';
import CadastrarClientes from './paginas/CadastrarClientes';
import CadastrarProdutos from './paginas/CadastrarProdutos';


function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cadastrarclientes" component={CadastrarClientes} />
            <Route path="/cadastrarprodutos" component={CadastrarProdutos} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes; 