// models/TextContent.js
const mongoose = require('mongoose');

const wordLimitValidator = (value) => {
  const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
  return wordCount <= 300;
};

const textContentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: false,
    validate: {
      validator: wordLimitValidator,
      message: 'Text must not exceed 500 words',
    },
  },
}, { timestamps: true });

module.exports = mongoose.model('TextContent', textContentSchema);
