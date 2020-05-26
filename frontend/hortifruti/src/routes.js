import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './paginas/Login';
import CadastrarClientes from './paginas/CadastrarClientes';
import CadastrarProdutos from './paginas/CadastrarProdutos';
import Usuario from './paginas/Usuario'


function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cadastrarclientes" component={CadastrarClientes} />
            <Route path="/cadastrarprodutos" component={CadastrarProdutos} />
            <Route path="/usuario" component={Usuario} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes; 