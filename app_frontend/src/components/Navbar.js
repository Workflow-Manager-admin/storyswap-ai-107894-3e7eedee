import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Simple navigation bar for app-wide navigation.
 * PUBLIC_INTERFACE
 */
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard" className="nav-item">Dashboard</NavLink>
      <NavLink to="/write" className="nav-item">Write</NavLink>
      <NavLink to="/exchange" className="nav-item">Exchanges</NavLink>
      <NavLink to="/history" className="nav-item">History</NavLink>
      <NavLink to="/profile" className="nav-item">Profile</NavLink>
      <NavLink to="/login" className="nav-item">Auth</NavLink>
    </nav>
  );
}

export default Navbar;
