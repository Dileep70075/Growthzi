import React, { useState } from 'react';
import './ButtonModal.css';

const ButtonModal = ({ onClose, updateButton }) => {
  const [buttonText, setButtonText] = useState("Button");
  const [buttonStyle, setButtonStyle] = useState("Fill");
  const [buttonSize, setButtonSize] = useState("Medium");
  const [buttonColor, setButtonColor] = useState("#6b7280");
  const [buttonLink, setButtonLink] = useState("");

  const handleSave = () => {
    updateButton({
      text: buttonText,
      color: buttonColor,
      size: buttonSize,
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="button-modal">
        <div className="modal-header">
          <h3>Link Button to page or URL</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <p className="subtext">You can select any specific page or paste URL</p>
        <select value={buttonLink} onChange={(e) => setButtonLink(e.target.value)} className="modal-select">
          <option value="">Select</option>
          <option value="https://example.com/page1">Page 1</option>
          <option value="https://example.com/page2">Page 2</option>
        </select>

        <label className="modal-label">Button Style</label>
        <select value={buttonStyle} onChange={(e) => setButtonStyle(e.target.value)} className="modal-select">
          <option>Fill</option>
          <option>Outline</option>
        </select>

        <label className="modal-label">Text</label>
        <input className="modal-input" value={buttonText} onChange={(e) => setButtonText(e.target.value)} placeholder="Text" />

        <label className="modal-label">Color</label>
        <input type="color" className="modal-color-input" value={buttonColor} onChange={(e) => setButtonColor(e.target.value)} />

        <label className="modal-label">Button Size</label>
        <select value={buttonSize} onChange={(e) => setButtonSize(e.target.value)} className="modal-select">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

        <button className="save-btn" onClick={handleSave}>Save Button</button>
        <button className="delete-btn" onClick={onClose}>Delete</button>
      </div>
    </div>
  );
};

export default ButtonModal;
