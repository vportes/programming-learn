import React, { useState, useEffect } from 'react';
import coursesData from '../courses.json';
import '../styles/App.css'
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [courses, setCourses] = useState([]);

    // Fetch courses from JSON
    useEffect(() => {
        setCourses(coursesData);
    }, []);

    return (
        <div className="dashboard-container">
            <h1>Cursos disponíveis</h1>
            <div className="courses-grid">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <div
                            className="course-title"
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + course.image})` }}
                        >
                            <h2>{course.title}</h2>
                        </div>
                        <div className="course-description">
                            <p>{course.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
