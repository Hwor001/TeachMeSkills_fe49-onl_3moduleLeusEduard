import './App.css';
import { useState } from 'react';
import { Button2 } from '#ui/button/button2';
import { SingUp } from '#ui/pages/sing-up';
import { SingIn } from '#ui/pages/sing-in';
import { Blog } from '#ui/pages/blog';
import { SelectPost } from '#ui/pages/selectPost';
import { Registration } from '#ui/pages/registration';
import { Success } from '#ui/pages/success';
// import { Link, Route, Routes } from 'react-router-dom'

export function Root() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'white'}`}>
      <Button2 onClick={toggleDarkMode}>Black and White</Button2>
      {/* <Routes>
         <Route path="/">
            <Route index element={<Link to="/sing-up">Go to sing up</Link>} />
            <Route path="/sing-up" element={<SingUp />} />
         </Route>
      </Routes> */}
      <SingUp />
      <Registration/>
      <SingIn/>
      <Success/>
      <SelectPost/>
      <Blog/>
    </div>
  );
}

export default Root;