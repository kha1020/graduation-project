// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink to="/home" exact activeClassName="active">Trang Chủ</NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName="active">Tin Tức</NavLink>
          </li>
          <li>
            <NavLink to="/Faq" activeClassName="active">Hỏi - Đáp</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Liên Hệ</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
