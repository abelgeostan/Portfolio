import React from 'react';

const About = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#000', width: '100vw',
    height: '100vh', }} id='about'>
        <div className='text-white container' style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="text-center mb-4">About Me</h2>
          <p>
            I’m a B.Tech student at Rajagiri School of Engineering and Technology, Kochi (CGPA: 8.35).
            I love building backend systems with Java & Spring Boot, deploying containerized services with Docker,
            and creating practical solutions like my YOLOv8-powered currency detection wearable for the visually impaired.
          </p>
      
      <p>
        I also run my own self-hosted Linux server for personal projects like StanDrive,
        and enjoy exploring cloud & DevOps tools.
      </p>
      </div>
    </section>
  );
};

export default About;
