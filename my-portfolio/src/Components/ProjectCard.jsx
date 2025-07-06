import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-primary text-start w-100 p-4 mb-4"
      style={{ borderRadius: '1rem' }}
    >
      <h5 className="mb-2 text-white">{title}</h5>
      <p className="mb-0 text-white">{description}</p>
    </button>
  );
};


export default ProjectCard;
