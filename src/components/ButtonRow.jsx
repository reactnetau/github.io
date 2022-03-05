import React from 'react';
import RowBtn from './RowBtn';
const ButtonRow = ({ onSelectRowBtn, onButtonClick }) => {
  return (
    <div className="btn-grid">
      <RowBtn title="Folio" onButtonClick={() => onButtonClick('folio')} />
      <RowBtn title="Clients" onButtonClick={() => onButtonClick('clients')} />
      <RowBtn title="GitHub" onButtonClick={() => onButtonClick('github')} />
      <RowBtn
        title="Experience"
        onButtonClick={() => onButtonClick('experience')}
      />
    </div>
  );
};

export default ButtonRow;
