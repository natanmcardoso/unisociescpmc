import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../services/api';
import './style.css';

function CadastrarProdutos() {

    const [nomeproduto, setNomeProduto] = useState('');
    const [tipoproduto, setProduto] = useState('');
    const [unidade, setUnidade] = useState('');
    const [preco, setPreco] = useState('');

    const history = useHistory();

    async function handleCadastrarProdutos(e) {
        e.preventDefault();

        const dados = {
            nomeproduto,
            tipoproduto,
            unidade,
            preco

        };

        try {
            const response = await api.post('frutas', dados);
             const id = response.data.id;
             alert("Seu identificador do produto é:" + id);
            // history.push('/');
        } catch (error) {
            alert("Erro no Cadastro de Produto");            
        }
    }

    return (
        <div className="login-container">
            <div>
                <h1>Cadastrar Produtos</h1>
            
                <form className="form" onSubmit={handleCadastrarProdutos}>
                                  
                    <input 
                        placeholder="Nome do Produto"
                        value={nomeproduto}
                        onChange={e => setNomeProduto(e.target.value)}/> 

                    <input 
                        placeholder="Tipo do produto"
                        value={tipoproduto}
                        onChange={e => setProduto(e.target.value)}/> 

                    <input 
                        placeholder="Unidade"
                        value={unidade}
                        onChange={e => setUnidade(e.target.value)}/> 

                    <input 
                        placeholder="Preço"
                        value={preco}
                        onChange={e => setPreco(e.target.value)}/> 

                    <button className="button" type="submit">Cadastrar</button>


                    <Link to="/">
                    Produto Já cadastrado
                </Link>
                
                </form>

                

            </div>
        </div>

    );
}

export default CadastrarProdutos;