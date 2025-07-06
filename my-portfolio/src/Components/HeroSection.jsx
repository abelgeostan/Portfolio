import React from 'react';
import back1 from '../assets/back1.png';
const HeroSection = () => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center text-white" id='Home'
  style={{
    width: '100vw',
    height: '100vh',
    left: 0,
    top: 0,
    margin: 0,
    
    backgroundImage: `url(${back1})`,
    overflowX: 'hidden'
  }}>
      <h1 className="display-4 mb-3">Abel George Stanley</h1>
      <h2 className="h4 mb-4">Software Engineer | Java • Spring Boot • React</h2>
      <p className="mb-4 w-75">
        I’m a passionate developer skilled in Java, Spring Boot, React, Docker, and deploying containerized apps on Linux servers.
        Built StanDrive and a YOLOv8-powered currency detection wearable for visually impaired users.
      </p>
      <div>
        <a href="mailto:abelgstanley@gmail.com" className="btn btn-primary me-2">Contact Me</a>
        <a href="https://www.linkedin.com/in/abel-george-stanley" className="btn btn-outline-light" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default HeroSection;
