import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const NewsCard = ({ article, index }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <Link to={`/news/${index}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: isDark ? '#2a2a2a' : '#fff',
        color: isDark ? '#fff' : '#000',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        padding: '0'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img
          src={article.urlToImage || 'https://via.placeholder.com/300x200'}
          alt={article.title}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <div style={{ padding: '15px' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
            {article.title.substring(0, 50)}...
          </h3>
          <p style={{ margin: '0 0 10px 0', fontSize: '13px', opacity: 0.8 }}>
            {article.description?.substring(0, 80)}...
          </p>
          <small style={{ opacity: 0.6 }}>
            {new Date(article.publishedAt).toLocaleDateString()}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;