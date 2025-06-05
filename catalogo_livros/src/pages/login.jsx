import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Navigate } from "react-router-dom";

function Login() {
    const {login} = useAuth();
    const { user } = useAuth();
    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/admin" replace></Navigate>;
    }

    const handleLogin = () => {
        login('usuario123'); //login ficticio
        navigate('/admin');
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
}

export default Login;