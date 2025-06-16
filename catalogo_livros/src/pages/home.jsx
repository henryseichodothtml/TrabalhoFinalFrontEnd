import React from "react";
import Detalhes from "./detalhes";
import ListaReceitas from "../components/listaReceitas";

function Home() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Seja bem-vindo à Livraria</h1>
      <div style={boxStyle}>
        <ListaReceitas />
      </div>
    </div>
  );
}

const containerStyle = {
  backgroundColor: '#121212',
  color: '#fff',
  minHeight: '100vh',
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const titleStyle = {
  fontSize: '2.5rem',
  marginBottom: '0.5rem',
  color: '#ffd966'
};

const subtitleStyle = {
  fontSize: '1.2rem',
  marginBottom: '2rem',
  color: '#ccc'
};

const boxStyle = {
  width: '100%',
  maxWidth: '900px',
  backgroundColor: '#1e1e1e',
  padding: '1.5rem',
  borderRadius: '10px',
  border: '1px solid #333'
};

export default Home;
