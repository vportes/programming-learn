require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 5000;
const secretKey = process.env.SECRET_KEY;

if (!secretKey) {
    console.error('SECRET_KEY não está definido no .env.');
    process.exit(1);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Registration Route
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    db.query('SELECT email FROM users WHERE email = ?', [email], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length > 0) {
            return res.status(400).json({ error: 'Email já existe' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword],
            (err, result) => {
                if (err) return res.status(500).json({ error: err });
                return res.status(201).json({ message: 'Usuário registrado com sucesso' });
            });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) {
            return res.status(400).json({ error: 'Credenciais inválidas' });
        }

        const user = result[0];

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ error: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login feito com sucesso!', token });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
