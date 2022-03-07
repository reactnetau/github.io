import React from 'react';

const RowBtn = ({ title, onButtonClick, active }) => {
  return (
    <a
      href="#carousel"
      className={active === true ? 'grid-row-btn-v-selected' : 'grid-row-btn-v'}
    >
      <button
        onClick={() => onButtonClick(title)}
        className={
          active === true ? 'grid-row-btn-v-selected' : 'grid-row-btn-v'
        }
      >
        {title}
      </button>
    </a>
  );
};

export default RowBtn;
