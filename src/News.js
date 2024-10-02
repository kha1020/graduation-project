// src/components/News.js
import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const newsArticles = [
  {
    id: 1,
    title: 'TP.HCM tri ân người hiến máu nhiều lần có hoàn cảnh khó khăn',
    date: '2024-09-01',
    content: 'Theo Ban chỉ đạo vận động hiến máu tình nguyện TP.HCM, giai đoạn trước năm 1994, nguồn máu cho điều trị người bệnh chủ yếu từ người cho máu lấy tiền, người bán máu, người nhà cho máu. Nội dung bài viết 1. Đây là một ví dụ về nội dung bài viết tin tức.',
    img: '/images/new1.jpg', 

  },
  {
    id: 2,
    title: 'Tiêu đề bài viết 2',
    date: '2024-09-15',
    content: 'Nội dung bài viết 2. Đây là một ví dụ khác về nội dung bài viết tin tức.',
    img: 'path-to-your-image/image2.png', 
  },
  {
    id: 3,
    title: 'Tiêu đề bài viết 3',
    date: '2024-09-20',
    content: 'Nội dung bài viết 3. Đây là một ví dụ bổ sung về nội dung bài viết tin tức.',
    img: 'path-to-your-image/image3.png', // Ensure this path is correct
  },
  {
    id: 4,
    title: 'Tiêu đề bài viết 4',
    date: '2024-09-25',
    content: 'Nội dung bài viết 4. Đây là một ví dụ thêm về nội dung bài viết tin tức.',
    img: 'path-to-your-image/image4.png', // Ensure this path is correct
  },
  // Add more articles as needed
];

const News = () => {
  return (
    <div className="news-container">
      <h1>Tin Tức</h1>
      <div className="news-grid">
        {newsArticles.map((article) => (
          <div key={article.id} className="news-article">
            <Link to={`/news/${article.id}`}>
              <img src={article.img} alt={article.title} className="news-image" /> {/* Display image */}
              <h2>{article.title}</h2>
            </Link>
            <p className="news-date">{article.date}</p>
            <p>{article.content.substring(0, 100)}...</p> {/* Preview content */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
