// src/components/ProjectSlider.js
import React from 'react';
import '../App.css';

const projects = [
  { id: 1, title: 'Project A', imageUrl: 'https://i.pinimg.com/enabled_lo/564x/57/3e/b6/573eb677974787904ef0ac83c1af4511.jpg', details: 'Details about Project A' },
  { id: 2, title: 'Project B', imageUrl: 'https://i.pinimg.com/564x/f4/b4/ea/f4b4ea73778d277a43e4d4926b95f55d.jpg', details: 'Details about Project B' },
  { id: 3, title: 'Project B', imageUrl: 'https://i.pinimg.com/564x/f4/b4/ea/f4b4ea73778d277a43e4d4926b95f55d.jpg', details: 'Details about Project B' },
  // Add more projects here
];

const ProjectSlider = () => {
  return (
    <div className="project-slider">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <button onClick={() => alert(project.details)}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectSlider;
