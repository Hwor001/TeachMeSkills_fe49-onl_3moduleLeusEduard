import './App.css';
import { useState } from 'react';
import { Button2 } from '#ui/button/button2';
import { SingUp } from '#ui/pages/sing-up';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <SingUp/>
      <Button2 onClick={toggleDarkMode}>Black</Button2>
    </div>
  );
}

export default App;
