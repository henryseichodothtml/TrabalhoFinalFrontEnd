import React, { useState } from 'react';
import { receitas } from '../components/listaLivros';

const Nova = () => {
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [desc, setDesc] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const _quantity = Math.floor(Math.random() * 10) + 1;

    try {
      const res = await fetch(`https://fakerapi.it/api/v1/persons?_locale=pt_BR&_quantity=${_quantity}`);
      const data = await res.json();

      const reviews = data.data.map((pessoa) => ({
        nome: `${pessoa.firstname} ${pessoa.lastname}`,
        comentario: 'Muito bom!',
        nota: Math.floor(Math.random() * 5) + 1,
      }));

      receitas.push({ nome, autor, genero, desc, preco, reviews });
      localStorage.setItem("livros", JSON.stringify(receitas));

      setNome('');
      setAutor('');
      setGenero('');
      setDesc('');
      setPreco('');

      alert("📘 Livro cadastrado com sucesso com reviews geradas!");

    } catch (error) {
      console.error("Erro ao gerar reviews:", error);
      alert("Ocorreu um erro ao gerar as avaliações.");
    }
  };

  return (
    <div style={{
      backgroundColor: '#121212',
      color: '#fff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#1e1e1e',
        padding: '2rem',
        borderRadius: '10px',
        border: '1px solid #333',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#ffd966' }}>Cadastrar Novo Livro</h2>

        <div style={{ marginBottom: '1rem' }}>
          <label>Nome:</label><br />
          <input style={inputStyle} value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Autor:</label><br />
          <input style={inputStyle} value={autor} onChange={(e) => setAutor(e.target.value)} required />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Gênero:</label><br />
          <input style={inputStyle} value={genero} onChange={(e) => setGenero(e.target.value)} required />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Sinopse:</label><br />
          <textarea style={{ ...inputStyle, resize: 'vertical' }} rows="4" value={desc} onChange={(e) => setDesc(e.target.value)} required />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label>Preço (R$):</label><br />
          <input type="number" style={inputStyle} value={preco} onChange={(e) => setPreco(e.target.value)} required />
        </div>

        <button type="submit" style={{
          backgroundColor: '#ffd966',
          color: '#000',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}>
          Salvar Livro
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  marginTop: '0.25rem',
  backgroundColor: '#2a2a2a',
  color: '#fff',
  border: '1px solid #444',
  borderRadius: '5px'
};

export default Nova;
