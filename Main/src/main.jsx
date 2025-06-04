import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { receitas } from './components/listaReceitas.jsx'
import { BrowserRouter } from 'react-router-dom'



console.log(receitas);
const root = createRoot(document.getElementById('root'));

root.render(
    <App />
)