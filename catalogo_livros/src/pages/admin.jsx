import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Admin() {
  const { user, logout } = useAuth();

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Sidebar */}
      <aside style={{
        width: '240px',
        backgroundColor: '#1e1e1e',
        padding: '2rem 1rem',
        borderRight: '1px solid #333'
      }}>
        <h2 style={{ color: '#ffd966', fontSize: '1.2rem' }}>📊 Dashboard</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
            <li style={{ marginBottom: '1rem' }}>
              <Link to="nova" style={navLinkStyle}>Novo Livro</Link>
            </li>
            <li>
              <Link to="lista" style={navLinkStyle}>Catálogo</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ margin: 0 }}>Área Administrativa</h1>
          <p>Bem-vindo, <strong>{user.name}</strong></p>
          <button
            onClick={logout}
            style={{
              backgroundColor: '#ff4d4d',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '0.5rem'
            }}
          >
            Sair
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

// Estilo para links
const navLinkStyle = {
  color: '#ccc',
  textDecoration: 'none',
  fontSize: '1rem',
  display: 'block',
  padding: '0.5rem',
  borderRadius: '5px',
  transition: 'background 0.3s',
  backgroundColor: '#2a2a2a'
};

export default Admin;
