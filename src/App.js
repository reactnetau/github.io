import { useState } from 'react';
import Header from './components/Header';
import Display from './components/Display';
import Details from './components/Details';
import ButtonRow from './components/ButtonRow';
import './App.css';
import ButtonRowSelector from './components/ButtonRowSelector';

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
      <ButtonRow onButtonClick={handleSelectBtn} />
      <ButtonRowSelector screen={screen} />
    </div>
  );
}

export default App;
