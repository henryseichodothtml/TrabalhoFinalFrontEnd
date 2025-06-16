import React from 'react';
import { useParams } from 'react-router-dom';
import { receitas } from '../components/listaReceitas';

const ExibirReceita = () => {
  const { id } = useParams();
  const currentReceita = receitas[id];

  if (!currentReceita) {
    return <p style={{ padding: 32, color: '#ccc' }}>Livro não encontrado.</p>;
  }

  return (
    <div style={{
      width: 1000,
      margin: '40px auto',
      padding: 32,
      borderRadius: 12,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.7)',
      backgroundColor: '#121212',
      color: '#eee',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #333',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8, color: '#ffd966' }}>📘 {currentReceita.nome}</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: 4 }}>
        <strong style={{ color: '#ffb74d' }}>Autor:</strong> {currentReceita.autor}
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: 4 }}>
        <strong style={{ color: '#ffb74d' }}>Gênero:</strong> {currentReceita.genero}
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: 4 }}>
        <strong style={{ color: '#ffb74d' }}>Sinopse:</strong> {currentReceita.desc}
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: 16 }}>
        <strong style={{ color: '#ffb74d' }}>Preço:</strong> R$ {currentReceita.preco}
      </p>

      <hr style={{ margin: '24px 0', borderColor: '#333' }} />

      <h2 style={{ marginBottom: 16, color: '#ffd966' }}>🗣️ Avaliações dos Leitores</h2>
      {currentReceita.reviews && currentReceita.reviews.length > 0 ? (
        currentReceita.reviews.map((rev, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#1e1e1e',
              border: '1px solid #444',
              borderRadius: 8,
              padding: 16,
              marginBottom: 12,
              color: '#ddd',
              boxShadow: '0 2px 6px rgba(0,0,0,0.7)',
            }}
          >
            <strong style={{ fontSize: '1rem', color: '#ffb74d' }}>{rev.nome}</strong>
            <p style={{ margin: '4px 0', color: '#ffd966' }}>⭐ {rev.nota}/5</p>
          </div>
        ))
      ) : (
        <p style={{ color: '#888' }}>Nenhuma avaliação disponível.</p>
      )}
    </div>
  );
};

export default ExibirReceita;
