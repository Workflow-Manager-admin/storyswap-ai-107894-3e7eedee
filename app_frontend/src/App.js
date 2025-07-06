import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Dashboard from './views/Dashboard';
import StoryWrite from './views/StoryWrite';
import StoryExchange from './views/StoryExchange';
import StoryVisuals from './views/StoryVisuals';
import Profile from './views/Profile';
import History from './views/History';
import Auth from './views/Auth';

// PUBLIC_INTERFACE
function App() {
  /**
   * App is the root of the story exchange diary—handles theme toggling and routing.
   * Contains navigation bar and main route logic for top-level features.
   */
  const [theme, setTheme] = useState('light');
  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <Router>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <Navbar />
        <main className="container rounded shadowed soft-blur bg-gradient">
          <Routes>
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/write" element={<StoryWrite />} />
            <Route path="/exchange" element={<StoryExchange />} />
            <Route path="/visuals" element={<StoryVisuals />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Auth />} />
            {/* Future: /exchange/:id to view a single exchanged story w/ visuals */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
