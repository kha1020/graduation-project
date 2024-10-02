// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Thông tin liên hệ</h4>
          <p>TT Hiến Máu Nhân Đạo</p>
          <p>Địa chỉ: 466 Nguyễn Thị Minh Khai, Phường 2, Quận 3, Thành phố Hồ Chí Minh</p>
          <p>Điện thoại: 028 3868 5509</p>
          <p>Điện thoại: 028 3868 5507</p>
        </div>

        <div className="footer-column">
          <h4>Bệnh viện BTH</h4>
          <p>Địa chỉ: 118 Đ. Hồng Bàng, Phường 12, Quận 5, Thành phố Hồ Chí Minh</p>
          <p>Điện thoại: 028 39571342</p>
          <p>Điện thoại: 028 39557858</p>
        </div>

        <div className="footer-column">
          <h4>TT truyền máu Chợ Rẫy</h4>
          <p>Địa chỉ: 56 Phạm Hữu Chí, Phường 12, Quận 5, Thành phố Hồ Chí Minh</p>
          <p>Điện thoại: 028 39555885</p>
        </div>

       
      </div>

      <div className="footer-bottom">
       
      </div>
    </footer>
  );
}

export default Footer;
