import React, { useState } from 'react';
import { receitas } from '../components/listaLivros';

const ListaAdmin = () => {
  const [, setAtualizar] = useState(0);

  const deletarReceita = (id) => {
    receitas.splice(id, 1);
    setAtualizar(prev => prev + 1);
    localStorage.setItem("livros", JSON.stringify(receitas)); 
  };

  return (
    <div style={{
      padding: '2rem',
      color: '#fff',
      backgroundColor: '#121212',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#ffd966', marginBottom: '2rem' }}>Lista de Livros Cadastrados</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {receitas.length === 0 ? (
          <p style={{ color: '#aaa' }}>Nenhum livro cadastrado.</p>
        ) : (
          receitas.map((item, index) => (
            <div key={index} style={{
              backgroundColor: '#1e1e1e',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #333',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ margin: 0, color: '#fff' }}>{item.nome}</h3>
                <p style={{ margin: 0, color: '#ccc' }}>Autor: {item.autor}</p>
              </div>
              <button
                onClick={() => deletarReceita(index)}
                style={{
                  backgroundColor: '#ff4d4d',
                  border: 'none',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Deletar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListaAdmin;
