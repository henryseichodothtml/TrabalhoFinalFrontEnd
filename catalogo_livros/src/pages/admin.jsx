import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Admin() {
    const {user, logout} = useAuth();

    return (
        <div>
            <h2>Área Administrativa</h2>
            <p>Bem-vindo, {user.name}</p>
            <button onClick={logout}>Sair</button>

            <aside>
                <h3>DASHBOARD</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="nova">Novo Livro (Admin)</Link>
                        </li>

                        <li>
                            <Link to="lista">Catálogo de Livros (Admin)</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main>
                <Outlet></Outlet>
            </main>
        </div>
        
    );
}

export default Admin;