import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import NewsCard from '../components/NewsCard';
import { ThemeContext } from '../context/ThemeContext';

const HomePage = ({ setArticles }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('general');
  const { isDark } = useContext(ThemeContext);

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const BASE_URL = process.env.BASE_URL;

  const fetchNews = async (searchQuery = null) => {
    setLoading(true);
    try {
      const url = searchQuery
        ? `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAt&apiKey=${API_KEY}`
        : `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`;

      const response = await axios.get(url);
      setNews(response.data.articles);
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
      alert('Error fetching news. Check API key!');
    }
    setLoading(false);
  };

useEffect(() => {
  fetchNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [category]);

  return (
    <div style={{
      background: isDark ? '#1a1a1a' : '#f5f5f5',
      color: isDark ? '#fff' : '#000',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <SearchBar onSearch={fetchNews} />

      <div style={{ padding: '20px', display: 'flex', gap: '10px', overflowX: 'auto' }}>
        {['general', 'technology', 'business', 'sports', 'health'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: '8px 16px',
              background: category === cat ? '#007bff' : isDark ? '#2a2a2a' : '#fff',
              color: category === cat ? '#fff' : isDark ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading && <div style={{ textAlign: 'center', padding: '40px' }}>Loading...</div>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {news.map((article, index) => (
          <NewsCard key={index} article={article} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;