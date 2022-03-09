import React from 'react';

const Detail = ({ title, description, back }) => {
  return (
    <div
      className="detail"
      style={{
        backgroundImage: 'url(' + back + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="detail-inner">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Detail;
