import { useEvents } from "../context/EventContext";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import "./CSS/Event.css"; 

export const Event = () => {
  const { events } = useEvents();
  const navigate = useNavigate();

  // Helper to determine event status
  const getEventStatus = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    const daysUntil = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntil < 0) return { label: 'Past', color: 'past' };
    if (daysUntil === 0) return { label: 'Today', color: 'today' };
    if (daysUntil <= 7) return { label: `${daysUntil}d away`, color: 'soon' };
    return { label: 'Upcoming', color: 'upcoming' };
  };

  if (!events || events.length === 0) {
    return <div className="event-list1"><p>No events available yet.</p></div>;
  }

  return (
    <div className="event-list1">
      {events.map((event) => {
        const status = getEventStatus(event.date);
        return (
          <div key={event._id} className="event-card1">
            <div className="event-img-wrap1">
              <img 
                src={`http://localhost:5000${event.image}`} 
                alt={event.title} 
                className="event-image1" 
              />
              <span className={`event-badge event-badge-${status.color}`}>
                {status.label}
              </span>
            </div>

            <div className="event-content">
              <h2>{event.title}</h2>
              
              <div className="event-meta">
                <p className="meta-item">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </p>
                <p className="meta-item">
                  <MapPin size={16} />
                  <span>{event.venue}</span>
                </p>
                {event.registrations && (
                  <p className="meta-item">
                    <Users size={16} />
                    <span>{event.registrations} registered</span>
                  </p>
                )}
              </div>

              <button
                className="view-btn"
                onClick={() => navigate("/event-details", { state: event })}
              >
                View Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
