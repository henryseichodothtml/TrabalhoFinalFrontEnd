import React from 'react';
import Receita from './receita';

export var receitas = [
  
];

if (localStorage.getItem("livros")) {
    receitas = (JSON.parse(localStorage.getItem("livros")));
    console.log(receitas);
}

const ListaReceitas = () => {
  

  return (
    <div>
      <h1>Catálogo de Livros</h1>
      {receitas.map((item, index) => (
        
        <Receita key={index} id={index} nome={item.nome}/>
      ))}

    </div>
  );
};

export default ListaReceitas;