import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('Todos os campos são obrigatórios');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });
            setToken(response.data.token);
            setMessage(response.data.message);
            setError('');

            navigate('/dashboard');
        } catch (err) {
            setError(err.response.data.error || 'Um erro ocorreu');
            setMessage('');
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/register');
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}
                {token && <p className="success-message">Token: {token}</p>}
                <p className="redirect-text">
                    Não tem uma conta? <button onClick={handleSignUpRedirect}>Cadastre-se</button>
                </p>
            </div>
        </div>
    );
};

export default Login;
