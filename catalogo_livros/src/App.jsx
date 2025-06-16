import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

import Home from './pages/home';
import Detalhes from './pages/detalhes';
import Login from './pages/login';
import Admin from './pages/admin';
import ExibirReceita from './pages/paginaLivro';
import Nova from './pages/nova';
import ListaAdmin from './pages/listaAdmin';
import Reviews from './components/BookSearch';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div style={{
          backgroundColor: '#121212',
          color: '#fff',
          minHeight: '100vh', 
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Arial, sans-serif'
        }}>
          <header style={{
            backgroundColor: '#1e1e1e',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #333',
            position: 'sticky',
            top: 0,
            zIndex: 1000
          }}>
            <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#ffd966' }}>📚 Livrarias Curitiba</h1>
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/" style={navLinkStyle}>Home</Link>
              <Link to="/login" style={navLinkStyle}>Login</Link>
              <Link to="/admin" style={navLinkStyle}>Admin</Link>
            </nav>
          </header>

          <main style={{ flex: 1, padding: '2rem' }}>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pesquisa" element={<Reviews />} />
              <Route path="/admin" element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }>
                <Route path='nova' element={<Nova />} />
                <Route path='lista' element={<ListaAdmin />} />
              </Route>
              <Route index path="/detalhes" element={<Detalhes />} />
              <Route path="/receita/:id" element={<ExibirReceita />} />
            </Routes>
          </main>

          <footer style={{
            backgroundColor: '#1e1e1e',
            color: '#777',
            textAlign: 'center',
            padding: '1rem 0',
            borderTop: '1px solid #333'
          }}>
            © 2025 Livrarias Curitiba
          </footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

const navLinkStyle = {
  color: '#ccc',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s',
};

export default App;
