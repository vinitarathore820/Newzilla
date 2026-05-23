import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{
      background: isDark ? '#1a1a1a' : '#fff',
      color: isDark ? '#fff' : '#000',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1>📰 Newzilla</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '8px 16px',
          background: isDark ? '#fff' : '#000',
          color: isDark ? '#000' : '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
};

export default Header;