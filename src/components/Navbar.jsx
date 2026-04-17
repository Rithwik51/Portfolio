import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logo">
          <h2>{'Rithwik'}</h2>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="https://drive.google.com/file/d/1JqKPGv6D8IUqcnfVixWrTL2T2yVZ44Xu/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
