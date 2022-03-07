import React, { useEffect, useState } from 'react';
import RowBtn from './RowBtn';
const ButtonRow = ({ screen, onButtonClick }) => {
  const [folioSelected, setFolioSelected] = useState(true);
  const [clientSelected, setCliendSelected] = useState(false);
  const [educationSelected, setEducationSelected] = useState(false);

  useEffect(() => {
    if (screen === 'folio') {
      setFolioSelected(true);
      setCliendSelected(false);
      setEducationSelected(false);
    } else if (screen === 'clients') {
      setFolioSelected(false);
      setCliendSelected(true);
      setEducationSelected(false);
    } else if (screen === 'education') {
      setFolioSelected(false);
      setCliendSelected(false);
      setEducationSelected(true);
    }
  }, [screen]);

  return (
    <div className="btn-grid">
      <RowBtn
        title="Work"
        onButtonClick={() => onButtonClick('folio')}
        active={folioSelected}
      />
      <RowBtn
        title="Clients"
        onButtonClick={() => onButtonClick('clients')}
        active={clientSelected}
      />
      <RowBtn
        title="Education"
        onButtonClick={() => onButtonClick('education')}
        active={educationSelected}
      />
    </div>
  );
};

export default ButtonRow;
