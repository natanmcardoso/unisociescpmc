import React, {useState, useEffect} from 'react';
import api from '../services/api';
import './style.css';

function Usuario() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        api.get('usuario',{}).then(response => {
            setUsuarios(response.data);
        });
    }, []);

        return (
            <div>
                <h1>Usuarios</h1>
                <p>Total de Usuário: {usuarios.length}</p>
                
                <ul>
                    {   usuarios.map(usuario => ( 
                        <li>
                            <p>Usuario: {usuario.id}</p>
                            <p>Nome: {usuario.nome}</p>
                            <p>Telefone: {usuario.telefone}</p>
                        </li>
                    ))
                    }
                </ul>
            </div>
        );
}

export default Usuario;