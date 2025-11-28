import { useRegistrationCount } from "../../hooks/useRegistrationCount.js";
import { useEvents } from "../../context/EventContext.jsx";
import "./DashboardHome.css";

export const DashboardHome = () => {
  const totalRegistrations = useRegistrationCount();
  const { events } = useEvents();
  return (
    <div className="dashboard-home">
      <h1>Dashboard Overview</h1>


      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p>{events.length}</p>
        </div>

        <div className="stat-card">
          <h3>Total Registrations</h3>
          <p>{totalRegistrations}</p>
        </div>

       
      </div>
    </div>
  );
};
