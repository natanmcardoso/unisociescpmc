import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../services/api';

function CadastrarProdutos() {

    const [nomeproduto, setNomeProduto] = useState('');
    const [tipoproduto, setProduto] = useState('');
    const [unidade, setUnidade] = useState('');
    const [preco, setPreco] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nomeproduto,
            tipoproduto,
            unidade,
            preco

        };

        try {
            const response = await api.post('usuario', dados);
             const id = response.data.id;
             alert("Seu identificador do produto é:" + id);
            // history.push('/');
        } catch (error) {
            alert("Erro no Cadastro de Produto");            
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastrar Produtos</h1>
            
                <form onSubmit={handleCadastro}>
                                  
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
                </form>

                <Link to="/">
                    Produto Já cadastrado
                </Link>

            </div>
        </div>

    );
}

export default CadastrarProdutos;