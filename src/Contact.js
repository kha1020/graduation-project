// src/Contact.js
import React from 'react';
import './Contact.css'; // Import CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Liên hệ</h1>
      <div className="contact-section">
        <h2>TT Hiến Máu Nhân Đạo</h2>
        <div className="location">
          <strong>Địa chỉ:</strong>
          <p>466 Nguyễn Thị Minh Khai, Phường 2, Quận 3, Thành phố Hồ Chí Minh</p>
        </div>
        <div className="location">
          <strong>Địa chỉ:</strong>
          <p>106 Thiên Phước, Phường 9, Tân Bình, Thành phố Hồ Chí Minh</p>
        </div>
        <div className="phone">
          <strong>Liên hệ giờ hành chính:</strong>
          <p>028 3868 5509</p>
          <p>028 3868 5507</p>
        </div>
      </div>
      
      <div className="contact-section">
        <h2>Bệnh viện BTH</h2>
        <div className="location">
          <strong>Địa chỉ:</strong>
          <p>118 Đ. Hồng Bàng, Phường 12, Quận 5, Thành phố Hồ Chí Minh</p>
        </div>
        <div className="location">
          <strong>Địa chỉ:</strong>
          <p>24 Nguyễn Thị Diệu, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh</p>
        </div>
        <div className="phone">
          <strong>Liên hệ giờ hành chính:</strong>
          <p>028 39571342</p>
          <p>028 39557858</p>
        </div>
      </div>
      
      <div className="contact-section">
        <h2>TT truyền máu Chợ Rẫy</h2>
        <div className="location">
          <strong>Địa chỉ:</strong>
          <p>56 Phạm Hữu Chí, Phường 12, Quận 5, Thành phố Hồ Chí Minh</p>
        </div>
        <div className="phone">
          <strong>Liên hệ giờ hành chính:</strong>
          <p>028 39555885</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
