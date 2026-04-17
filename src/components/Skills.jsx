import React from 'react';

const Skills = () => {
  const skillsList = [
    'Java', 'Python', 'React', 'SQL', 
    'HTML', 'CSS', 'JavaScript', 'JDBC',"IOT"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="grid skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
