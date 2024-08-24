import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Topbar.css';

const TopBar = () => {

    return (
        <div className="top-bar">
            <h2>ProgrammingLearn</h2>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/services">Aulas</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                    <li>
                        <Link to="/login" className="login-button">Acesso</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TopBar;
