import React from 'react';
import '../styles/Home.css';

const About = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>Sobre</h1>
            </header>

            <section className="project-info">
                <h2>Sobre o Projeto</h2>
                <p>
                    Nosso projeto é dedicado a ensinar programação a todas as pessoas, gratuitamente.
                    Acreditamos que o acesso ao conhecimento é fundamental para a transformação pessoal e profissional.
                    Oferecemos uma variedade de cursos que cobrem desde o básico até tópicos avançados, tudo com o objetivo de tornar a programação acessível a todos.
                </p>
            </section>

            <section className="bio">
                <h2>Sobre mim</h2>
                <p>
                    Olá, meu nome é * e sou aluno de Análise e Desenvolvimento de Sistemas. Decidi criar este projeto para compartilhar meu conhecimento e ajudar outras pessoas a aprenderem programação.
                    Minha paixão por ensino e tecnologia me levou a construir uma plataforma onde qualquer pessoa pode aprender gratuitamente.
                </p>
            </section>

            <section className="contact">
                <h2>Entre em Contato</h2>
                <p>
                    Se você tiver alguma dúvida ou precisar de mais informações, sinta-se à vontade para entrar em contato conosco.
                </p>
                <p>Email: meu@email.com</p>
            </section>
        </div>
    );
};

export default About;
