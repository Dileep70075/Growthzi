import React from 'react';
import './ABC.css';

const testimonialsData = [
  {
    name: 'John Smith',
    title: 'CEO, TechWave',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'NextTech helped us scale our platform in record time. Their engineering team is outstanding!',
  },
  {
    name: 'Samantha Lee',
    title: 'CTO, FinBoost',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'Highly professional and reliable team. They built our cloud infrastructure and improved performance by 40%.',
  },
  {
    name: 'Carlos Diaz',
    title: 'Founder, HealthFlow',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    quote:
      'Their design team created an intuitive and stunning UI. Great collaboration throughout!',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonialsData.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img src={t.photo} alt={t.name} className="testimonial-photo" />
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-title">{t.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
