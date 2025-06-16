import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './home.css';

const Home = () => {
  const cards = [
    {
      icon: faRocket,
      title: 'Launch Fast',
      description: 'Quickly deploy your projects with our streamlined tools and services.',
    },
    {
      icon: faUsers,
      title: 'Collaborate',
      description: 'Work seamlessly with your team using integrated collaboration features.',
    },
    {
      icon: faChartLine,
      title: 'Grow',
      description: 'Scale your business with analytics and performance insights.',
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Welcome to MyApp</h1>
        <p className="hero-subtitle">Empower your projects with our cutting-edge platform.</p>
        <button className="hero-cta">Get Started</button>
      </section>
      <section className="features">
        <h2 className="features-title">Our Features</h2>
        <div className="features-grid">
          {cards.map((card, index) => (
            <div key={index} className="feature-card">
              <FontAwesomeIcon icon={card.icon} className="card-icon" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;