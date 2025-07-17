// src/App.js
import React, { useState } from 'react';
import './Portfolio.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log('Submitting form data:', formData); // Logs to browser console

    try {
      const res = await axios.post('http://localhost:3001/users/saveOrUpdateText', formData);
      alert('Message Sent Successfully!');
      setFormData({ name: '', email: '', text: '' });
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to send message');
    }

    setLoading(false);
  };

  return (
    <div className="Ap">
      {/* Navbar */}
      <nav className="navba">
        <h1 className="log">John Doe</h1>
        <ul className="nav-link">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="her">
        <h2>Hi, I'm John Doe</h2>
        <p>Full Stack Developer | React | Node.js</p>
        <a href="#contact" className="bt">Hire Me</a>
      </header>

      {/* About Section */}
      <section id="about" className="sectio">
        <h2>About Me</h2>
        <p>I'm a passionate developer with 3+ years of experience in building modern web apps.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-ligh">
        <h2>Skills</h2>
        <div className="skill">
          <span>HTML</span><span>CSS</span><span>JavaScript</span>
          <span>React</span><span>Node.js</span><span>MongoDB</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="sectio">
        <h2>Projects</h2>
        <div className="project">
          <div className="project-car">
            <h3>Portfolio Website</h3>
            <p>My personal portfolio website built with React and CSS.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-ligh">
        <h2>Contact Me</h2>
        <form className="contact-for" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Message"
            rows="5"
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="bt" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="foote">
        <p>© 2025 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
