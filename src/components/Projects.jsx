import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive personal portfolio built with React to showcase skills and projects.',
      technologies: ['React', 'CSS3', 'Vite', 'Responsive Design'],
      //liveLink: '#',
      githubLink: ''
    },
    {
      title: 'Smart Agrisense IoT System with ML Integration',
      description: 'An IoT-based agricultural monitoring system integrating Machine Learning for data analysis and crop health prediction.',
      technologies: ['IoT', 'Machine Learning', 'Python', 'Sensors'],
      //liveLink: '#',
      githubLink: 'https://github.com/Rithwik51/Smart-Agrisence-IOT-system-with-ML-Integration'
    },
    {
      title: 'Medicine Vending Machine', 
      description: 'A smart medicine vending machine that dispenses medications based on user input and prescription data, built with core Java and OOPs principles.',
      technologies: ['core java', 'OOPs', 'Data Structures'],
      githubLink: 'https://github.com/Rithwik51/Medicine-Vending-Machine'
    }
  ];

  return (
    <section id="projects" className="projects section-alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <h4>Key Technologies built with:</h4>
              <br/>
              <ul style={{ marginBottom: '1.5rem' }}>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    view project on github
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
