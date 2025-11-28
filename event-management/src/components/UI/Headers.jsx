import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Headers.css";

export const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="navbar-grid">
          <div className="Logo">
            <NavLink 
              to={"/"} 
              className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <h1 className="nav-text">EventNook</h1>
            </NavLink>
          </div>

          {/* Hamburger Toggle Button */}
          <button 
            className="hamburger-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Menu */}
          <nav 
            aria-label="Main navigation"
            className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          >
            <ul>
              <li>
                <NavLink 
                  to={"/"} 
                  className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={"/event"} 
                  className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={"/about"} 
                  className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={"/contact"} 
                  className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={"/gallery"} 
                  className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Gallery
                </NavLink>
              </li>

              <li className="loginbtn">
                <NavLink 
                  to={"/login"} 
                  className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
