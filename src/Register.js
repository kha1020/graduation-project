import React, { useState } from 'react';
import './Register.css'; // Import CSS file

const Register = () => {
  const [selectedFile, setSelectedFile] = useState(null); // State for file selection
  const [error, setError] = useState(''); // State for error message

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log('File được chọn:', e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!selectedFile) {
      setError('Vui lòng chọn một tệp.');
      return;
    }
  
    console.log('Form submitted with file:', selectedFile);
    setError(''); 
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="circle-container">
          <div className="circle">
            <div className="circle-text">1</div>
            <p className="circle-description">Giấy tờ tuỳ thân</p>
          </div>
          <div className="separator">-</div>
          <div className="circle">
            <div className="circle-text">2</div>
            <p className="circle-description">Hồ sơ người hiến máu</p>
          </div>
          <div className="separator">-</div>
          <div className="circle">
            <div className="circle-text">3</div>
            <p className="circle-description">Xác thực tài khoản</p>
          </div>
          <div className="separator">-</div>
          <div className="circle">
            <div className="circle-text">4</div>
            <p className="circle-description">Tạo mật khẩu</p>
          </div>
        </div>

        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <p className="with-dot">Để đăng ký tài khoản vui lòng cung cấp thông tin giấy tờ tùy thân của người hiến máu.</p>
            <p className="with-dot">Vui lòng chuẩn bị giấy tờ tùy thân để hệ thống ghi nhận lại mặt trước của giấy tờ tùy thân.</p>
          </label>

          {error && <p className="error">{error}</p>}

          {/* File upload section */}
          <div className="file-upload-section">
            <div className="file-upload-item">
              <div className="cloud-icon">
                <i className="fa fa-cloud-upload"></i> {/* Example using Font Awesome */}
              </div>
              <div className="file-upload-content">
                <p className="file-upload-text">Cách 1: Kéo và thả file tại đây</p>
                <p>Hoặc</p>
                <input type="file" onChange={handleFileChange} />
              </div>
            </div>

            {/* Vertical separator */}
            <div className="vertical-separator"></div>

            {/* QR code section */}
            <div className="file-upload-item">
              <p className="file-upload-text">Cách 2: Quét mã QR Code</p>
              <p>Tải lên từ điện thoại</p>
              <div className="qr-code-placeholder">
                <img src="QR.png" alt="Mã QR" />
                <div className="qr-code-text">Nội dung mô tả ảnh</div>
              </div>
            </div>
          </div>

          <button type="submit">Tiếp theo</button>

          {/* Thêm phần này để hiện liên kết "Đã có tài khoản? Đăng nhập ngay" */}
          <p className="login-prompt">
            Đã có tài khoản? <a href="/login" className="login-link">Đăng nhập ngay</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
