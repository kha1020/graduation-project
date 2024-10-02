import React, { useState } from 'react';
import './IdentityDocuments.css'; // Import CSS file

const IdentityDocuments = () => {
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
    <div className="identity-documents-page">
      <div className="identity-documents-container">
        <h2>Giấy tờ tuỳ thân</h2>
        <p className="description">Vui lòng tải lên giấy tờ tuỳ thân của bạn để hoàn tất đăng ký.</p>
        
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="file-upload-section">
            <div className="file-upload-item">
              <div className="cloud-icon">
                <i className="fa fa-cloud-upload"></i>
              </div>
              <div className="file-upload-content">
                <p className="file-upload-text">Tải lên giấy tờ tuỳ thân tại đây</p>
                <input type="file" onChange={handleFileChange} />
              </div>
            </div>
          </div>

          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  );
};

export default IdentityDocuments;
