import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        console.log('Form submitted', formData);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <section className="contact-info">
                <h1>Entre em Contato</h1>
                <p>Estamos aqui para ajudar! Entre em contato conosco para qualquer dúvida ou sugestão.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <h2>Endereço</h2>
                        <p>Rua, 123, Londrina, Brasil</p>
                    </div>
                    <div className="contact-detail">
                        <h2>Telefone</h2>
                        <p>(00) 1234-5678</p>
                    </div>
                    <div className="contact-detail">
                        <h2>Email</h2>
                        <p>contato@programminglearn.com</p>
                    </div>
                </div>
                <button
                    className="cta-button"
                    onClick={() => setIsFormVisible(!isFormVisible)}
                >
                    {isFormVisible ? 'Fechar formulário' : 'Nos envie uma mensagem'}
                </button>
            </section>

            {isFormVisible && (
                <section className="contact-form">
                    <h2>Envie uma Mensagem</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Nome:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome"
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Seu email"
                                required
                            />
                        </label>
                        <label>
                            Assunto:
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Assunto da mensagem"
                                required
                            />
                        </label>
                        <label>
                            Mensagem:
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Sua mensagem"
                                rows="4"
                                required
                            />
                        </label>
                        <button type="submit" className="cta-button">Enviar Mensagem</button>
                    </form>
                </section>
            )}
        </div>
    );
}

export default Contact;
