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
import { useTheme } from './ui/theme/themeContext';
import { Blog2 } from '#ui/pages/blog2';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

export function Root() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleSearch = (inputValue: string) => {
    setSearchText(inputValue);
    navigate('/seachPost');
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'extra light'}`}>
      <ButtonWrapper>
        <Button2 onClick={toggleDarkMode}>Black and Extra light</Button2>
      </ButtonWrapper>
      <Routes>
        <Route path="/">
          <Route index element={<Link to="/sing-up">Go to sing up</Link>} />
          <Route
            path="/sing-up"
            element={<SingUp handleSearch={handleSearch} />}
          />
          <Route
            path="/registration"
            element={<Registration handleSearch={handleSearch} />}
          />
          <Route
            path="/sing-in"
            element={<SingIn handleSearch={handleSearch} />}
          />
          <Route
            path="/success"
            element={<Success handleSearch={handleSearch} />}
          />
          <Route
            path="/selectPost"
            element={<SelectPost handleSearch={handleSearch} />}
          />
          <Route
            path="/seachPost"
            element={
              <SeachPost
                handleSearch={handleSearch}
                searchResultsText={searchText}
              />
            }
          />
          <Route path="/blog" element={<Blog handleSearch={handleSearch} />} />
          <Route
            path="/blog2"
            element={<Blog2 handleSearch={handleSearch} />}
          />
        </Route>
      </Routes>
      {/* <SingUp />
      <Registration />
      <SingIn />
      <Success />
      <SelectPost />
      <Blog />
      <Blog2 />
      <SeachPost /> */}
    </div>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 64px;
  right: -5px;
`;

export default Root;
