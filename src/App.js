import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Topbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';
import DynamicCssVars from './components/CssDinamico';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <DynamicCssVars />
                <ScrollToTop /> {/* Adicione o ScrollToTop aqui */}
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
