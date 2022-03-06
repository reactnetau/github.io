import React from 'react';

const RowBtn = ({ title, onButtonClick }) => {
  return (
    <a href="#carousel" className="grid-row-btn-v">
      <button onClick={() => onButtonClick(title)}>{title}</button>
    </a>
  );
};

export default RowBtn;
