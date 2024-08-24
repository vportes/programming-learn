import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !email || !password) {
            setError('Todos os campos são obrigatórios');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/register', {
                username,
                email,
                password
            });
            setMessage(response.data.message);
            setError('');
        } catch (err) {
            setError(err.response.data.error || 'Um erro ocorreu');
            setMessage('');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Usuário:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Digite seu nome de usuário"
                        />
                    </div>
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
                    <button type="submit">Cadastrar</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}
            </div>
        </div>
    );
};

export default Register;
