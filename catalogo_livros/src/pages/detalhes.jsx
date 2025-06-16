import React from "react";
import ListaReceitas from "../components/listaReceitas";

function Detalhes() {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Nossos Livros</h2>
      <ListaReceitas />
    </div>
  );
}

const containerStyle = {
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '2rem',
  backgroundColor: '#1e1e1e',
  borderRadius: '10px',
  border: '1px solid #333',
  color: '#fff',
  fontFamily: 'Arial, sans-serif'
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '1.5rem',
  color: '#ffd966',
  textAlign: 'center'
};

export default Detalhes;
