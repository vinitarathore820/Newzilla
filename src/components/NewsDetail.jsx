import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const NewsDetail = ({ articles }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeContext);
  const article = articles[id];

  if (!article) {
    return <div style={{ padding: '20px' }}>News not found</div>;
  }

  return (
    <div style={{
      background: isDark ? '#1a1a1a' : '#fff',
      color: isDark ? '#fff' : '#000',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '10px 20px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        ← Back
      </button>

      <img
        src={article.urlToImage || 'https://via.placeholder.com/600x400'}
        alt={article.title}
        style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
      />

      <h1>{article.title}</h1>
      <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '20px' }}>
        By {article.author || 'Unknown'} | {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      <p>{article.description}</p>
      <p>{article.content}</p>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          background: '#28a745',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          marginTop: '20px'
        }}
      >
        Read Full Article →
      </a>
    </div>
  );
};

export default NewsDetail;