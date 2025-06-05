import React from 'react';
import { useState } from 'react';
import {receitas} from '../components/listaReceitas';

const Nova = () => {
    function adicionarReceita(nome, autor, genero, desc, preco, img) {
        
        receitas.push({nome: nome, autor: autor, genero: genero, desc: desc, preco: preco, img: img});
        
    }

    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [desc, setDesc] = useState('');
    const [preco, setPreco] = useState('');
    const [img, setImage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.addEventListener('load', () =>{
            console.log(reader.result);
        })

        reader.readAsDataURL(img);
        adicionarReceita(nome, autor, genero, desc, preco, img);
    
        setNome('');
        setAutor('');
        setGenero(''); 
        setDesc('');
        setPreco('');
        setImage('');
        localStorage.setItem("livros", JSON.stringify(receitas));
        alert("Livro cadastrado com sucesso!")
      };

    return(
        <div style={{padding: '1rem'}}>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)}required />
                <br></br>
                <label>Autor:</label>
                <input value={autor} onChange={(e) => setAutor(e.target.value)}required/>
                <br></br>
                <label>Genero:</label>
                <input value={genero} onChange={(e) => setGenero(e.target.value)}required/>
                <br></br>
                <label>Sinopse:</label>
                <input value={desc} onChange={(e) => setDesc(e.target.value)}required/>
                <br></br>
                <label>Preço:</label>
                <input type='number' value={preco} onChange={(e) => setPreco(e.target.value)}required/>
                <br></br>
                <label>Imagem:</label>
                <input type='file' value={img} onChange={(e) => setImage(e.target.files)}required/>
                <br></br>
                <br></br>
                <button type="submit">Enviar</button>
            </form>
        </div> 
        
    )
}

export default Nova;