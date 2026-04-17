import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <div className="info-item">
              <strong>Email:</strong>
              <p>srithwik51@gmail.com</p>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <p>+91 6302596581</p>
            </div>
            <div className="info-item">
              <strong>LinkedIn:</strong>
              <p><a href="https://www.linkedin.com/in/srithwik" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/srithwik</a></p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
