import React from 'react';
import Receita from './livro';

export var receitas = [];

if (localStorage.getItem("livros")) {
  receitas = JSON.parse(localStorage.getItem("livros"));
  console.log(receitas);
}

const ListaReceitas = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Catálogo de Livros</h1>
      <div style={gridStyle}>
        {receitas.map((item, index) => (
            <Receita id={index} nome={item.nome} />
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '2rem',
  backgroundColor: '#121212',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  borderRadius: '10px'
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
  color: '#ffd966'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1.5rem'
};

const cardStyle = {
  backgroundColor: '#1e1e1e',
  padding: '1rem',
  borderRadius: '8px',
  border: '1px solid #333',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  transition: 'transform 0.2s ease',
};

export default ListaReceitas;
