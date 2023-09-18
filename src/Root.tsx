import './App.css';
import { useState } from 'react';
import { Button2 } from '#ui/button/button2';
import { SingUp } from '#ui/pages/sing-up';
import { SingIn } from '#ui/pages/sing-in';
import { Blog } from '#ui/pages/blog';
import { SelectPost } from '#ui/pages/selectPost';
import { Registration } from '#ui/pages/registration';
import { Success } from '#ui/pages/success';
import styled from 'styled-components';
import { SeachPost } from '#ui/pages/seachpost';
// import { Link, Route, Routes } from 'react-router-dom'

export function Root() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'white'}`}>
      <ButtonWrapper>
        <Button2 onClick={toggleDarkMode}>Black and White</Button2>
      </ButtonWrapper>
      {/* <Routes>
         <Route path="/">
            <Route index element={<Link to="/sing-up">Go to sing up</Link>} />
            <Route path="/sing-up" element={<SingUp />} />
         </Route>
      </Routes> */}
      <SingUp />
      <Registration />
      <SingIn />
      <Success />
      <SelectPost />
      <Blog />
      <SeachPost />
    </div>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 45px;
  right: -5px;
`;

export default Root;
