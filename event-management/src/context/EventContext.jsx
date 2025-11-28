// src/context/EventContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/events");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Fetch events failed:", err);
    }
  };

  const deleteEvent = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/events/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        alert("Event deleted successfully!");
        fetchEvents(); // refresh list
      } else {
        alert("Failed to delete event.");
      }
    } catch (err) {
      console.error("Delete event failed:", err);
      alert("Error: " + err.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events, setEvents, fetchEvents, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
