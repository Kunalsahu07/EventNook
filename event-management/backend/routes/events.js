// backend/routes/events.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Event = require("../models/Event");

// configure multer to save files to /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Create event (multipart/form-data)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, date, venue, description } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const ev = new Event({
      title,
      date,
      venue,
      description,
      image: imagePath,
    });

    const saved = await ev.save();
    return res.json({ success: true, event: saved });
  } catch (err) {
    console.error("POST /api/events error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    return res.json(events);
  } catch (err) {
    console.error("GET /api/events error:", err);
    return res.status(500).json({ error: err.message });
  }
});

// Delete event (also removes file from uploads)
const fs = require("fs");
router.delete("/:id", async (req, res) => {
  try {
    const ev = await Event.findById(req.params.id);
    if (!ev) return res.status(404).json({ error: "Event not found" });

    // remove uploaded file if present
    if (ev.image) {
      const filePath = `.${ev.image}`; // because image stored with leading /uploads/filename
      fs.unlink(filePath, (err) => {
        if (err) console.warn("Failed to remove file:", filePath, err.message);
      });
    }

    await Event.findByIdAndDelete(req.params.id);
    return res.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/events/:id error:", err);
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
