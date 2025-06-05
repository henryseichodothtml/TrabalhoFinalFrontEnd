import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import PrivateRoute from './PrivateRoute'

import Home from './pages/home'
import Lista from './pages/lista';
import Detalhes from './pages/detalhes';
import Login from './pages/login';
import Admin from './pages/admin';
import ExibirReceita from './pages/receita';
import Nova from './pages/nova'
import ListaAdmin from './pages/listaAdmin'

import './App.css'

function App() {
  return(
        <AuthProvider>
          <BrowserRouter>
            <div>
            <h1>Livrarias Curitiba</h1>

              <nav>
                <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/admin">Admin</Link> | <Link to="/detalhes">Detalhes</Link>
              </nav>
              <hr />
              <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/admin" element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }>
                  <Route path='nova' element={<Nova></Nova>}></Route>
                  <Route path='lista' element={<ListaAdmin></ListaAdmin>}></Route>
                </Route>
                <Route index path="/detalhes" element={<Detalhes/>}/>
                <Route path="receita/:id" element={<ExibirReceita/>}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </AuthProvider>
  )
}

export default App
