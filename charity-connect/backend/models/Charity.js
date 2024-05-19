const mongoose = require('mongoose');

const CharitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  donations: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Charity', CharitySchema);
