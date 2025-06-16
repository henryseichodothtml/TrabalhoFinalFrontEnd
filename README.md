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

catalogo_livros/
├── public/
├── src/
│ ├── components/
│ │ ├── BookForm.jsx
│ │ ├── BookList.jsx
│ │ └── ReviewList.jsx
│ ├── services/
│ │ └── fakerApi.js
│ ├── App.jsx
│ └── index.js
├── .env
├── package.json
└── README.md

Instalação e Execução Local
no git bash-

git clone https://github.com/henryseichodothtml/TrabalhoFinalFrontEnd.git
cd catalogo_livros
npm install
npm start

API Utilizada

A aplicação utiliza a rota de comments da API pública FakerAPI:


Licença
(inexistente)

Autores
Desenvolvido por:

Gabriel da silva 
Matheus Nogueira
Henry Seicho Murakami
