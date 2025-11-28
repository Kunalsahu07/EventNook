// src/pages/ManageEventManager.jsx
import { useState } from "react";
import { useEvents } from "../../context/EventContext";
import './ManageEventManager.css';

export const ManageEventManager = () => {
  const { events, fetchEvents, deleteEvent } = useEvents();

  const [form, setForm] = useState({
    title: "",
    date: "",
    venue: "",
    description: "",
    imageFile: null,
    previewUrl: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setForm({ ...form, imageFile: file, previewUrl: URL.createObjectURL(file) });
  };

  const addEvent = async () => {
    const { title, date, venue, description, imageFile } = form;
    if (!title || !date || !venue || !imageFile) {
      alert("Please fill all required fields.");
      return;
    }

    const fd = new FormData();
    fd.append("title", title);
    fd.append("date", date);
    fd.append("venue", venue);
    fd.append("description", description);
    fd.append("image", imageFile);

    try {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        alert("Event added successfully!");
        setForm({ title: "", date: "", venue: "", description: "", imageFile: null, previewUrl: null });
        fetchEvents();
      } else {
        alert("Failed to add event.");
      }
    } catch (err) {
      console.error("Add event failed:", err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="manage-event-container">
      <h1 className="heading-manage">Manage Events</h1>

      {/* Event Form */}
      <div className="form-group">
        <label>Title*</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Event Title" />
      </div>
      <div className="form-group">
        <label>Date*</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Venue*</label>
        <input type="text" name="venue" value={form.venue} onChange={handleChange} placeholder="Event Venue" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Event Description" />
      </div>
      <div className="form-group">
        <label>Image*</label>
        <input type="file" accept="image/*" onChange={handleImage} />
      </div>
      {/* {form.previewUrl && (
        <div className="image-preview">
          <p>Preview:</p>
          <img src={form.previewUrl} alt="preview" />
        </div>
      )} */}
      <button className="add-event-btn" onClick={addEvent}>Add Event</button>

      {/* Existing Events */}
      <h2>Existing Events</h2>
      <div className="existing-events">
        {events.map((event) => (
          <div key={event._id} className="event-card2">
            <img src={`http://localhost:5000${event.image}`} alt={event.title} className="event-image2" />
            <h3>{event.title}</h3>
            <p>{event.date} - {event.venue}</p>
            <button className="delete-btn" onClick={() => deleteEvent(event._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
