import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../services/api';
import './style.css';

function CadastrarClientes() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');  

    const history = useHistory();

    async function handleCadastrarClientes(e) {
        e.preventDefault();

        const dados = {
            nome,
            cpf,
            nomeEmpresa,
            cnpj,
            telefone,
            email
        };

        try {
            const response = await api.post('clientes', dados);
             const id = response.data.id;
             alert("Seu identificador de usuário é:" + id);
            // history.push('/');
        } catch (error) {
            alert("Erro no Cadastro de Cliente");            
        }
    }

    return (
        <div>
            <div className="login-container">
                <h1>Cadastrar Cliente</h1>
                <Link to="/login">
                    Ja tenho cadastro
                </Link>

                <form className="form" onSubmit={handleCadastrarClientes}>

                    <input 
                        placeholder="Seu Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/> 

                    <input 
                        placeholder="Seu CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}/> 
                    
                    <input 
                        placeholder="Nome da sua Empresa"
                        value={nomeEmpresa}
                        onChange={e => setNomeEmpresa(e.target.value)}/> 
                    
                    <input 
                        placeholder="CNPJ"
                        value={cnpj}
                        onChange={e => setCnpj(e.target.value)}/> 

                    <input 
                        placeholder="telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)} /> 

                    <input 
                        type="email" 
                        placeholder="Seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/> 

                    <button className="button" type="submit">Cadastrar</button>
                </form>
    
            </div>
        </div>

    );
}

export default CadastrarClientes;