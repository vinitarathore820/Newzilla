import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NewsDetail from './components/NewsDetail';

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage setArticles={setArticles} />} />
          <Route path="/news/:id" element={<NewsDetail articles={articles} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;