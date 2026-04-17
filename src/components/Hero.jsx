import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Hi, I'm</h2>
          <h1>Sirigiri Rithwik</h1>
          <p>
            Computer Science Graduate passionate about building modern web applications 
            and learning new technologies.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="#projects" className="btn">View Projects</a>
            <a href="https://github.com/Rithwik51" target="_blank" rel="noopener noreferrer" className="btn">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
