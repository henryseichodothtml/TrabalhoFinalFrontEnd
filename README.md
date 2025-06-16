# TrabalhoFinalFrontEnd
# TrabalhoFinalFrontEnd

Aplicação em **React** que permite listar, cadastrar e visualizar livros em um catálogo. As **avaliações dos livros** são geradas usando a **API do FakerAPI**, simulando resenhas de usuários para enriquecer o sistema.

Tecnologias Utilizadas

- React
- React Router DOM
- FakerAPI (https://fakerapi.it)
- CSS Modules 
- LocalStorage (para simular persistência de livros)
- Vite

Funcionalidades

- Cadastrar livros (título, autor, ano, descrição).
- Visualizar lista de livros cadastrados.
- Gerar avaliações falsas automaticamente com a API do FakerAPI.
- Remover livros.
- `localStorage` para armazenar as informações localmente.

Estrutura do Projeto

meu-projeto/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── BookCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Catalog.jsx
│   │   └── BookDetails.jsx
│   ├── services/
│   │   └── fakerApi.js
│   ├── utils/
│   │   └── storage.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .eslintrc.cjs
├── eslint.config.js
├── vite.config.js
├── package.json
├── package-lock.json
└── README.md


Instalação e Execução Local
no git bash-

git clone https://github.com/henryseichodothtml/TrabalhoFinalFrontEnd.git
cd catalogo_livros
npm install
npm start

API Utilizada

A aplicação utiliza a rota de comments da API pública FakerAPI:

Requisição da API
 try {
      const res = await fetch(`https://fakerapi.it/api/v1/persons?_locale=pt_BR&_quantity=${_quantity}`);
      const data = await res.json();

      const reviews = data.data.map((pessoa) => ({
        nome: `${pessoa.firstname} ${pessoa.lastname}`,
        comentario: 'Muito bom!',
        nota: Math.floor(Math.random() * 5) + 1,
      }));

Componente 

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


Licença
(inexistente)

Autores
Desenvolvido por:

Gabriel da silva 
Matheus Nogueira
Henry Seicho Murakami
