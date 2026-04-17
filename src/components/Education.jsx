import React from 'react';

const Education = () => {
  const educationList = [
    {
      degree: 'B.Tech CSE-IoT',
      institution: 'G. Pullaiah College of Engineering and Technology',
      score: 'CGPA: 8.1',
      year: '2025'
    },
    // {
    //   degree: 'Intermediate',
    //   institution: 'Junior College Name',
    //   score: 'Score / Percentage',
    //   year: 'Year of Passing'
    // },
    // {
    //   degree: 'Secondary School Certificate (SSC)',
    //   institution: 'School Name',
    //   score: 'Score / Percentage',
    //   year: 'Year of Passing'
    // }
  ];

  return (
    <section id="resume" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationList.map((edu, index) => (
            <div key={index} className="timeline-item">
              <h3>{edu.degree}</h3>
              <div className="meta">{edu.institution} | {edu.year}</div>
              <p>{edu.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
