import React, { useState, useEffect } from 'react';
import ClientsCarousel from './Buttons/ClientsCarousel';
import Folio from './Buttons/Folio';
import Github from './Buttons/Github';
import Experience from './Buttons/Experience';

const ButtonRowSelector = ({ screen }) => {
  useEffect(() => {
    setView(screen);
  }, [screen]);

  const [view, setView] = useState('folio');

  if (view === 'folio') {
    return (
      <div id="carousel">
        <Folio />
      </div>
    );
  } else if (view === 'clients') {
    return (
      <div id="carousel">
        <ClientsCarousel />
      </div>
    );
  } else if (view === 'github') {
    return (
      <div id="carousel">
        <Github />
      </div>
    );
  } else if (view === 'experience') {
    return (
      <div id="carousel">
        <Experience />
      </div>
    );
  }
};

export default ButtonRowSelector;
