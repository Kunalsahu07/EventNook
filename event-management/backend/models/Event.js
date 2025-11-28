// backend/models/Event.js
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String },          // keep string or use Date type if you prefer
  venue: { type: String },
  description: { type: String },
  image: { type: String },         // store filename or file URL (we'll store path /uploads/...)
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Event", EventSchema);
