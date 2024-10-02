// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Nhập Link từ React Router
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Email và mật khẩu không được để trống');
      return;
    }

    console.log('Đăng nhập thành công với email:', email);
    setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Đăng nhập</button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Quên mật khẩu?</a>
        </div>
        <div className="register">
          <p>Chưa có tài khoản? <Link to="/register">Đăng ký</Link></p> {/* Sử dụng Link */}
        </div>
      </div>
    </div>
  );
};

export default Login;
