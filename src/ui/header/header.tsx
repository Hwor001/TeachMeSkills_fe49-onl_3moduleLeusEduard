import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Logo from '../namelogo/logo';
import { Button4 } from '../button/button4';
import { Button5 } from '../button/button5';
import { Button6 } from '../button/button6';

interface Props {}

export const Header: React.FC<Props> = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const savedName = localStorage.getItem('name') || '';
  const savedLastName = localStorage.getItem('lastname') || '';

  const toggleLogo = () => {
    document.documentElement.style.setProperty(
      '--burger-span-rotation',
      isMenuOpen ? '0deg' : '45deg'
    );
    document.documentElement.style.setProperty(
      '--burger-span-top',
      isMenuOpen ? '0' : '8px'
    );
    document.documentElement.style.setProperty(
      '--burger-span-rotation2',
      isMenuOpen ? '0deg' : '-45deg'
    );
    document.documentElement.style.setProperty(
      '--burger-span-display',
      isMenuOpen ? 'block' : 'none'
    );
    setShowLogo(!showLogo);
    setIsMenuOpen(!isMenuOpen);
  };

  const clearInput = () => {
    setInputValue('');
  };

  const handleSearch = () => {
    console.log(inputValue);
  };

  return (
    <HeaderWrapper>
      <Button5 onClick={toggleLogo}>
        <BurgerWrapper>
          <span></span>
          <span></span>
          <span></span>
        </BurgerWrapper>
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
            <FontAwesomeIcon icon={faTimes} />
          </Button6>
        </SeachWrapper>
      )}
      <Button4 onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </Button4>
      <Logo username={`${savedName}  ${savedLastName}`} />
      <LogoWrapper>
        {showLogo && <Logo username={`${savedName} ${savedLastName}`} />}
      </LogoWrapper>
    </HeaderWrapper>
  );
};

const BurgerWrapper = styled.div`
  display: block;
  width: 19px;
  height: 17px;
  position: relative;
  cursor: pointer;
  transition: 0.1s;
  & span {
    position: absolute;
    transition: 0.1s;
    top: 44%;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: rotate(var(--burger-span-rotation2));
    &:first-child {
      top: var(--burger-span-top);
      transform: rotate(var(--burger-span-rotation));
    }
    &:last-child {
      display: var(--burger-span-display);
      top: auto;
      bottom: 0;
      transform: rotate(var(--burger-span-rotation));
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const LogoWrapper = styled.div`
  display: flex;
  transform: translate3d(0px, 64px, 0px);
  position: absolute;
`;

const SeachWrapper = styled.div`
  all: unset;
  width: -webkit-fill-available;
  input {
    width: -webkit-fill-available;
    background-color: #4949b1;
    padding: 23px 0;
    color: white;
    &::placeholder {
      color: silver;
    }
  }
`;

const BlueRectangle = styled.div`
  width: -webkit-fill-available;
  height: 63.48px;
  background-color: blue;
`;

export default Header;
