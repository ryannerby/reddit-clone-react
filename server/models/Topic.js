// server/models/Topic.js
const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  published_at: { type: Date, default: Date.now },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model('Topic', topicSchema);
