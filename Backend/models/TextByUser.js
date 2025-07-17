// models/Vision.js
const mongoose = require('mongoose');

const visionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  text: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount >= 1 && wordCount <= 500;
      },
      message: 'Text must be between 1 and 500 words.'
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Vision', visionSchema);
