import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About Us</h1>
        <p className="about-intro">
          Welcome to <strong>NextTech Solutions</strong> — your partner in digital transformation.
        </p>

        <div className="about-content">
          <p>
            NextTech Solutions is a leading IT services company providing cutting-edge software solutions,
            cloud services, and AI-driven innovations to global enterprises. Founded in 2015, we are driven by
            a passion for building technology that solves real-world challenges.
          </p>

          <p>
            Our team of 200+ engineers, designers, and strategists specialize in Web Development, Mobile App
            Development, Cybersecurity, DevOps, and Data Science. We serve clients in over 15 countries and
            have delivered 500+ successful projects across fintech, healthcare, education, and retail sectors.
          </p>

          <p>
            At NextTech, we value collaboration, continuous learning, and creating impactful digital experiences.
            We’re not just building products—we’re building the future.
          </p>
        </div>

        <div className="about-highlights">
          <div>
            <h3>🌐 15+ Countries</h3>
            <p>Serving clients across the globe</p>
          </div>
          <div>
            <h3>💼 500+ Projects</h3>
            <p>Delivered with precision and quality</p>
          </div>
          <div>
            <h3>👨‍💻 200+ Experts</h3>
            <p>Driven by innovation & skill</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
