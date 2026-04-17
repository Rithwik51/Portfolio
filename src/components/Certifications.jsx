import React from 'react';

const Certifications = () => {
  const certList = [
    'NPTEL Cloud Computing',
    'Industrial IoT',
    'IBM Python',
    'IEEE Publication'
  ];

  return (
    <section className="certifications section-alt">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="timeline">
          {certList.map((cert, index) => (
            <div key={index} className="timeline-item">
              <h3>{cert}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
