import React from 'react';
import RowBtn from './RowBtn';
const ButtonRow = ({ onSelectRowBtn, onButtonClick }) => {
  return (
    <div className="btn-grid">
      <RowBtn title="Work" onButtonClick={() => onButtonClick('folio')} />
      <RowBtn title="Clients" onButtonClick={() => onButtonClick('clients')} />
      <RowBtn
        title="Education"
        onButtonClick={() => onButtonClick('education')}
      />
    </div>
  );
};

export default ButtonRow;
