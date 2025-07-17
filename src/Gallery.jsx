

import React from 'react';
import './App.css';

function App() {
  // Generate 1000 unique image URLs using picsum.photos
  const images = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/id/${(i % 1000) + 1}/300/200`,
  }));

  return (
    <div className="gallery-container">
      <h1>Image Gallery (1000 Photos)</h1>
      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img.id} className="card">
            <img src={img.url} alt={`Gallery ${img.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
