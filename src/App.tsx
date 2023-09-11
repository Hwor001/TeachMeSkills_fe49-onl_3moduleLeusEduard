import './App.css';
import { useState } from 'react';
import { Button2 } from '#ui/button/button2';
import { SingUp } from '#ui/pages/sing-up';
import { SingIn } from '#ui/pages/sing-in';
import { Blog } from '#ui/pages/blog';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'white'}`}>
      <Button2 onClick={toggleDarkMode}>Black and White</Button2>
      <SingUp/>
      <SingIn/>
      <Blog/>
    </div>
  );
}

export default App;
