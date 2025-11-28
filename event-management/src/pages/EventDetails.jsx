import { useLocation, Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Clock, Users, Trophy } from "lucide-react";
import "./CSS/EventDetails.css";

export const EventDetails = () => {
  const { state } = useLocation();
  const event = state;

  // Helper to determine event status
  const getEventStatus = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    const daysUntil = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntil < 0) return { label: 'Event Completed', color: 'completed', icon: Trophy };
    if (daysUntil === 0) return { label: 'Happening Today!', color: 'today', icon: Clock };
    if (daysUntil <= 7) return { label: `${daysUntil} days left`, color: 'soon', icon: Clock };
    return { label: `${daysUntil} days away`, color: 'upcoming', icon: Calendar };
  };

  const status = getEventStatus(event.date);
  const StatusIcon = status.icon;

  return (
    <div className="event-details-container">
      <div className="event-details-card">
        {/* Status Badge */}
        <div className={`event-status-badge status-${status.color}`}>
          <StatusIcon size={16} />
          <span>{status.label}</span>
        </div>

        {/* Hero Image Section */}
        {event.image && (
          <div className="event-hero-image">
            <img 
              src={`http://localhost:5000${event.image}`} 
              alt={event.title} 
              className="hero-img" 
            />
            <div className="image-overlay"></div>
          </div>
        )}

        {/* Title */}
        <h1 className="event-title">{event.title}</h1>

        {/* Quick Info Grid */}
        <div className="event-quick-info">
          <div className="info-box">
            <Calendar size={20} className="info-icon" />
            <div className="info-text">
              <span className="info-label">Date</span>
              <p className="info-value">{event.date}</p>
            </div>
          </div>

          <div className="info-box">
            <MapPin size={20} className="info-icon" />
            <div className="info-text">
              <span className="info-label">Venue</span>
              <p className="info-value">{event.venue}</p>
            </div>
          </div>

          {event.registrations && (
            <div className="info-box">
              <Users size={20} className="info-icon" />
              <div className="info-text">
                <span className="info-label">Registered</span>
                <p className="info-value">{event.registrations}</p>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="details-divider"></div>

        {/* Description */}
        <div className="description-section">
          <h2>About This Event</h2>
          <p className="event-desc">{event.description}</p>
        </div>

        {/* Features/Highlights */}
        <div className="highlights-section">
          <h3>Highlights</h3>
          <ul className="highlights-list">
            <li>✨ Exciting competitive experience</li>
            <li>🏆 Recognition and prizes</li>
            <li>👥 Network with peers</li>
            <li>📜 Certificates of participation</li>
          </ul>
        </div>

        {/* CTA Button */}
        <Link to="/registration" className="register-btn">
          <span>Register Now</span>
          <ArrowRight size={20} />
        </Link>

        {/* Back Link */}
        <Link to="/event" className="back-link">
          ← Back to Events
        </Link>
      </div>
    </div>
  );
};
