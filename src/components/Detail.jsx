import React from 'react';

const Detail = ({ title, description }) => {
  return (
    <div className="detail">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Detail;
