import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Stylish navigation bar for app-wide navigation, matching brand theme.
 * PUBLIC_INTERFACE
 */
function Navbar() {
  return (
    <nav className="navbar rounded shadowed soft-blur" aria-label="Main navigation">
      <NavLink to="/dashboard" className="nav-item" activeclassname="active">Dashboard</NavLink>
      <NavLink to="/write" className="nav-item" activeclassname="active">Write</NavLink>
      <NavLink to="/exchange" className="nav-item" activeclassname="active">Exchanges</NavLink>
      <NavLink to="/history" className="nav-item" activeclassname="active">History</NavLink>
      <NavLink to="/profile" className="nav-item" activeclassname="active">Profile</NavLink>
      <NavLink to="/login" className="nav-item" activeclassname="active">Auth</NavLink>
    </nav>
  );
}

export default Navbar;
