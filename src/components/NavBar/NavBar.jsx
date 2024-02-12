import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navBar ${menuOpen ? 'menuOpen' : ''}`}>
        <div className="burger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <NavLink to="/home">
          <img className="link" id="logo" src="images/logo.svg" alt="logo" />
        </NavLink>

        <div className="overlay" onClick={toggleMenu}></div> {/* Nuevo overlay aquí */}

        <div className="iconHolder">

          <NavLink to="/home">
            <div className="homeIcon link">
              <img className="icon" src="images/home-mobile-ui-svgrepo-com.svg" alt="icon-home" />
              <h3>Home</h3>
            </div>
          </NavLink>

          <NavLink to="/list">
            <div className="listIcon link">
              <img className="icon" src="images/ballot_7661391.svg" alt="icon-list" />
              <h3>List</h3>
            </div>
          </NavLink>

          <NavLink to="/help">
            <div className="helpIcon link">
              <img className="icon" src="images/help-circle-svgrepo-com.svg" alt="icon-help" />
              <h3>Help</h3>
            </div>
          </NavLink>

          <NavLink to="/wheel">
            <div className="wheelIcon link">
              <img className="icon" src="images/poker-chip_3915145.svg" alt="icon-wheel" />
              <h3>Wheel</h3>
            </div>
          </NavLink>

        </div>
      </nav>
    </>
  )
}

export default NavBar