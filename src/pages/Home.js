import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import coursesData from '../courses.json';

function Home() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(coursesData.slice(0, 5));
    }, []);

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Bem-vindo ao ProgrammingLearn</h1>
                    <p>Aprenda programação de forma gratuita e acessível para todos.</p>
                    <a href="#courses" className="cta-button">Veja Nossas Aulas Gratuitas</a>
                </div>
            </section>
            <section id="courses" className="courses">
                <h2>Algumas de nossas aulas</h2>
                <div className="courses-grid">
                    {courses.map(course => (
                        <div key={course.id} className="course-card">
                            <img src={course.image} alt={course.title} />
                            <div className="course-info">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="about">
                <h2>Sobre Nós</h2>
                <p>Somos uma plataforma dedicada a ensinar programação a todas as pessoas, sem custos. Acreditamos que a educação em tecnologia deve ser acessível a todos, independentemente de sua origem ou situação financeira.</p>
            </section>
            <section className="contact">
                <h2>Entre em Contato</h2>
                <p>Tem alguma dúvida ou sugestão? Entre em contato conosco e ficaremos felizes em ajudar!</p>
                <a href="/contact" className="cta-button">Fale Conosco</a>
            </section>
        </div>
    );
}

export default Home;
