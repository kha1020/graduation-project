import React, { useState } from 'react';
import './Home.css'; // Import CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Import the calendar icon
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles

const Home = () => {
  const [dateTime, setDateTime] = useState(null); // Set initial state to null

  const handleDateTimeChange = (date) => {
    setDateTime(date);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (dateTime) {
      alert(`You need to schedule an appointment at: ${dateTime.toLocaleString()}`); // Format the date to a string
    } else {
      alert('Please select a date and time.'); // Alert if no date is selected
    }
    // Add logic to handle the search functionality
  };

  return (
    <div className="home-container">
      <h1>Đặt lịch hẹn</h1>
      <h1>Hiến máu cứu người</h1>
      <p>Với mỗi lần hiến máu bạn có thể mang lại cơ hội cứu sống 3 người. Hãy cứu lấy mạng người bằng ít máu của mình!</p>

      <div className="full-width-form">
        <div className="appointment-text">
          <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
          Bạn cần đặt lịch vào thời gian nào?
        </div>
        
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <div className="date-picker-container">
            <DatePicker
              selected={dateTime}
              onChange={handleDateTimeChange}
              showTimeSelect // Show time selection
              dateFormat="Pp" // Format for date and time
              placeholderText="Chọn thời gian..."
            />
            <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon-input" />
          </div>
          <button type="submit">Tìm kiếm</button>
        </form>

        {/* Add the new link below the search form with the specified URL */}
        <p className="guidelines-link">
          Xem hướng dẫn quy trình đăng ký hiến máu <a href="https://static.giotmauvang.org.vn/ihpstatic/GMV_HuongDanSuDung.pdf" target="_blank" rel="noopener noreferrer">Tại đây</a>
        </p>
      </div>

      {/* New rectangular box outside the search form */}
      <div className="rectangle-box">
        {/* You can add any content you want inside this box */}
        <p>Nội dung bên trong hình chữ nhật</p>
      </div>
    </div>
  );
}

export default Home;
