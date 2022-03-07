import { useState } from 'react';
import Header from './components/Header';
import Display from './components/Display';
import Details from './components/Details';
import ButtonRow from './components/ButtonRow';
import ButtonRowSelector from './components/ButtonRowSelector';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [screen, setScreen] = useState('folio');

  const handleSelectBtn = (screen) => {
    console.log('working');
    setScreen(screen);
  };

  return (
    <div className="App">
      <Header />
      <Display />
      <Details />
      <ButtonRow onButtonClick={handleSelectBtn} screen={screen} />
      <ButtonRowSelector screen={screen} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
