import React, { useState } from 'react';
import './FAQs.css';

const faqData = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'How does useState work in React?',
    answer: 'The useState hook lets you add state to functional components.',
  },
  {
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used in React to describe UI structure.',
  },
  {
    question: 'How do I create a React app?',
    answer: 'You can create a React app using Create React App: npx create-react-app my-app',
  },
  {
    question: 'What is a component in React?',
    answer: 'A component is a reusable piece of UI in React.',
  },
  {
    question: 'How do I pass props in React?',
    answer: 'Props are passed to components like attributes in HTML: <Component title="Hello" />',
  },
  {
    question: 'What is the Virtual DOM?',
    answer: 'The virtual DOM is a lightweight representation of the real DOM used to optimize updates in React.',
  },
  {
    question: 'How do I handle events in React?',
    answer: 'You handle events in React using camelCase syntax and function handlers like onClick={handleClick}.',
  },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
