import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  { 
    id: 1, 
    title: 'The Giraffe Hotel', 
    imageUrl: 'https://i.pinimg.com/564x/e1/36/37/e1363723cbdb79c40c8938da68cd6027.jpg', 
    details: 'A luxurious hotel in the heart of Karen.', 
    cost: 'KES 50,000,000', 
    startDate: '2022-01-01', 
    endDate: '2022-12-31', 
    location: 'Karen, Nairobi', 
    employees: ['John Mwangi', 'Jane Njeri'], 
    engineer: 'Alice Kamau', 
    link: 'https://example.com/giraffe-hotel'
  },
  { 
    id: 2, 
    title: 'Bungalow', 
    imageUrl: 'https://i.pinimg.com/564x/bb/ee/c7/bbeec719905269c534555e5172763118.jpg', 
    details: 'A modern bungalow located in Kitusuru.', 
    cost: 'KES 75,000,000', 
    startDate: '2023-02-15', 
    endDate: '2023-11-30', 
    location: 'Kitusuru, Nairobi', 
    employees: ['David Mutua', 'Sarah Wanjiku'], 
    engineer: 'Michael Kariuki', 
    link: 'https://example.com/bungalow'
  },
  { 
    id: 3, 
    title: 'Mkuti House', 
    imageUrl: 'https://i.pinimg.com/564x/51/32/6c/51326ceacaabf02254b4375c01c0793e.jpg', 
    details: 'A traditional mkuti-roof house in Narok.', 
    cost: 'KES 60,000,000', 
    startDate: '2022-05-10', 
    endDate: '2023-01-15', 
    location: 'Narok', 
    employees: ['Tom Otieno', 'Emma Nduta'], 
    engineer: 'Steven Wambugu', 
    link: 'https://example.com/mkuti-house'
  }
  // Add other project objects here if needed...
];

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projects.find(p => p.id === parseInt(id)); // Find the project by its ID

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} className="project-image-large" />
      <p><strong>Details:</strong> {project.details}</p>
      <p><strong>Cost of Construction:</strong> {project.cost}</p>
      <p><strong>Start Date:</strong> {project.startDate}</p>
      <p><strong>End Date:</strong> {project.endDate}</p>
      <p><strong>Location:</strong> {project.location}</p>
      <p><strong>Employees Involved:</strong> {project.employees.join(', ')}</p>
      <p><strong>Structural Engineer:</strong> {project.engineer}</p>
      {/* View More button linking to external site */}
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <button className="view-btn">View More</button>
      </a>
    </div>
  );
};

export default ProjectDetails;
