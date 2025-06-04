import React from 'react';
import { useNavigate } from 'react-router-dom';



const Receita = ({ id, nome, autor, genero, desc, preco }) => {
  let navigate = useNavigate();

  return (
    
    <div style={styles.produto}>
      <button onClick={() => navigate(`/receita/${id}`)}>{nome}</button>
    </div>
  );
};

const styles = {
  produto: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: 'gray'
  }
};

export default Receita;