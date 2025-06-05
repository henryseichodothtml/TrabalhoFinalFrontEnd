import React from 'react';
import Receita from './receita';
import ListaReceitas  from '../components/listaReceitas';
import {receitas} from '../components/listaReceitas';
import { useParams } from 'react-router-dom';

const ExibirReceita = () => {
    const {id} = useParams();
    
    let currentReceita = receitas[id];
    return(
        <div>
            <h1>Livro: {currentReceita.nome}</h1>
            <h2>Autor: {currentReceita.autor}</h2>
            <h2>Genero: {currentReceita.genero}</h2>
            <h2>Sinopse: {currentReceita.desc}</h2>
            <h2>Preço: R${currentReceita.preco}</h2>
            <div class="bookimage">
                <h2>Capa:</h2>
                <img src='.\assets\biblia.png'></img>
            </div>
        </div>
    )
}

export default ExibirReceita;