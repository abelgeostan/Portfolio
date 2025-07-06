import React from 'react';

const Skills = () => {
  return (
    <section className="container py-5 bg-light">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <h5>Languages</h5>
          <p>Java, Python, JavaScript, C</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Frameworks</h5>
          <p>Spring Boot, React, Flask</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Databases</h5>
          <p>PostgreSQL, MongoDB, SQL</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Tools</h5>
          <p>Docker, Git, Postman, Jupyter</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Operating Systems</h5>
          <p>Linux, Windows</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>ML & IoT</h5>
          <p>YOLOv8, Roboflow, Raspberry Pi</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
