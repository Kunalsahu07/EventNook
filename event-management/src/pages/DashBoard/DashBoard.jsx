import './DashBoard.css';
import { NavLink, Outlet } from "react-router-dom";

export const DashBoard = () => {
  return (
    <div className='dashboard-container'>

      {/* LEFT SIDEBAR */}
      <div className="left">
        <ul>
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => isActive ? "active-link" : ""}
              end
            >
              Dashboard
            </NavLink>
          </li>

          {/* <li>
            <NavLink 
              to="/dashboard/allevents"
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              All Events
            </NavLink>
          </li> */}

          {/* <li>
            <NavLink 
              to="/dashboard/analytics"
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Analytics
            </NavLink>
          </li> */}

          <li>
            <NavLink 
              to="/dashboard/manageeventmanager"
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Manage Event Manager
            </NavLink>
          </li>

          <li className='logout'>
            <NavLink to="/login">Logout</NavLink>
          </li>
        </ul>
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
}
