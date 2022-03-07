import React from 'react';

const FolioDetails = ({ box: { title, description, image }, setVisible }) => {
  return (
    <div style={{ borderRadius: '15px' }}>
      <img
        src={image && image}
        style={{
          width: '200px',
          height: '200px',
          margin: '25px',
          display: 'inline',
          float: 'left',
          borderRadius: '15px',
        }}
        alt="pop up details"
      />
      <h1
        style={{
          display: 'block',
          float: 'left',
          marginTop: '18px',
        }}
      >
        {title}
      </h1>

      <p
        style={{
          display: 'block',
          position: 'absolute',
          left: '252px',
          top: '80px',
          width: '60%',
        }}
      >
        {description}
      </p>
      <button
        style={{
          color: 'gray',
          backgroundColor: '#c8d5b9',
          borderRadius: '5px',
          float: 'right',
          margin: '20px',
        }}
        onClick={() => setVisible(false)}
      >
        Close
      </button>
    </div>
  );
};

export default FolioDetails;
