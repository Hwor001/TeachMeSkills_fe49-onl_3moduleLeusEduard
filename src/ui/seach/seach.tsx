import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../namelogo/logo';
import x from './img/75519.png';
import lupa from './img/lupa.png';
import burger from './img/burger-menu-icon-8.jpg';
import { Button4 } from '../button/button4';
import { Button5 } from '../button/button5';
import { Button6 } from '../button/button6';

interface Props {
  
}

export const Header: React.FC<Props> = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [currentImage, setCurrentImage] = useState(burger);
  const [inputValue, setInputValue] = useState('');
  const savedName = localStorage.getItem('name') || '';
  const savedLastName = localStorage.getItem('lastname') || ''; 

  const toggleLogo = () => {
    setShowLogo(!showLogo);
    setCurrentImage(currentImage === burger ? x : burger);
  };

  const clearInput = () => {
    setInputValue('');
  };

  const handleSearch = () => {
    console.log(inputValue);
  }

  return (
    <HeaderWrapper>
      <Button5 onClick={toggleLogo}>
        <img src={currentImage} alt='#' className='pic1' />
        {/* <div className='burger-icon'>
        </div> */}
      </Button5>
      {showLogo ? (
        <BlueRectangle className="blue-rectangle" />
      ) : (
        <SeachWrapper className="search">
          <input
            className="search-text"
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button6 onClick={clearInput}>
            <img src={x} alt='#' className='pic3' />
          </Button6>
        </SeachWrapper>
      )}
      <Button4 onClick={handleSearch}>
        <img src={lupa} alt='#' className='pic2' />
      </Button4>
      <Logo username={`${savedName} ${savedLastName}`} />
      <LogoWrapper>{showLogo && (
          <Logo username={`${savedName} ${savedLastName}`} />
      )}</LogoWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`

const LogoWrapper = styled.div`
  display: flex;
  transform: translate3d(0px, 70px, 0px);
  position: absolute;
`;

const SeachWrapper = styled.div`
  all: unset;
  width: -webkit-fill-available;
  input {
    width: -webkit-fill-available;
    background-color: #4949b1;
    padding: 27px 0 26px 0;
    color: white;
    &::placeholder {
      color: silver; 
    }
  }
`;

const BlueRectangle = styled.div`
  width: -webkit-fill-available;;
  height: auto;
  background-color: blue;
`;

export default Header;
