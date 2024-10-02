// src/components/MemberUnits.js
import React from 'react';
import './MemberUnits.css';

const memberData = [
  { title: 'Đơn vị thành viên:', image: '/path-to-your-image/member1-logo.png' },
  { title: 'Chỉ đạo thực hiện:', image: '/path-to-your-image/member2-logo.png' },
  { title: 'Tổ chức và Phát triển bởi:', image: '/path-to-your-image/member3-logo.png' },
  { title: 'Tài trợ:', image: '/path-to-your-image/member4-logo.png' },
];

const MemberUnits = () => {
  return (
    <div className="member-units">
      <div className="member-titles">
        {memberData.map((member, index) => (
          <div key={index} className="member-item">
            <h4>{member.title}</h4>
            <img src={member.image} alt={member.title} className="member-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberUnits;
