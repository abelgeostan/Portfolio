import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="container py-5 d-flex flex-column justify-content-center align-items-center text-center text-white" style={{
    width: '100vw',
    height: '100vh',
    padding: '2rem',
    
    
    backgroundColor: '#000',
    overflowX: 'hidden'
  }}>
      <h2 className="text-center mb-4">Projects</h2>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <ProjectCard
            title="StanDrive: Personal Cloud Drive"
            description="Full-stack cloud drive built with Spring Boot, React, PostgreSQL, and Docker. Features secure upload, JWT/OAuth2, and public links with expiry."
            link="https://github.com/abelgeostan/cloud"
          />
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <ProjectCard
            title="Currency Detection Wearable"
            description="YOLOv8 + Raspberry Pi device to help visually impaired users detect Indian currency and damaged notes. Institution-funded with real-time audio feedback."
            link="#"
          />
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <ProjectCard
            title="Home Server & Self-Hosted Services"
            description="Linux server running Docker, hosting Nextcloud, Plex, StanDrive, and other self-hosted tools. Secured with Cloudflare Tunnel."
            link="#"
          />
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <ProjectCard
            title="Hackathon Projects"
            description="Face recognition attendance system (3rd prize, HIVE NIGHT Hackathon). QBus – Real-time bus tracker built with Flutter and Google Maps."
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
