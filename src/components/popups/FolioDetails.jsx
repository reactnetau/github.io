import React from 'react';

const FolioDetails = ({ box: { title, description, image }, setVisible }) => {
  return (
    <div className="popup">
      <img src={image && image} alt="pop up details" />
      <h1>{title}</h1>

      <p className="popup-description">{description}</p>
      <button onClick={() => setVisible(false)}>Close</button>
    </div>
  );
};

export default FolioDetails;
