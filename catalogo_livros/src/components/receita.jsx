import React from 'react';
import { useNavigate } from 'react-router-dom';

const Receita = ({ id, nome }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.card}>
      <h3 style={styles.nome}>{nome}</h3>
      <button style={styles.botao} onClick={() => navigate(`/receita/${id}`)}>
        Ver Detalhes
      </button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #333',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  nome: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#ffd966',
  },
  botao: {
    backgroundColor: '#ffd966',
    color: '#000',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease',
  },
};

export default Receita;
