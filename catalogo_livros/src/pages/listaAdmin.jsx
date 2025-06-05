import React from 'react';
import { useState } from 'react';
import { receitas } from '../components/listaReceitas';

const ListaAdmin = () => {
    const [, setAtualizar] = useState(0);

    const deletarReceita = (id) => {
        receitas.splice(id, 1);
        setAtualizar(prev => prev + 1);
    }

    return(
        <div>
            <h1>Lista de Receitas</h1>
            <ol>
                {receitas.map((item, index) => (
                    <li key={index}>
                        <h3>Nome: {item.nome}
                        </h3>
                        <button onClick={() => deletarReceita(index)}>Deletar</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ListaAdmin;