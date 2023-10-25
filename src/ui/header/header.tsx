import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '#ui/namelogo/logo';
import { Button4 } from '#ui/button/button4';
import { Button5 } from '#ui/button/button5';
import { Button6 } from '#ui/button/button6';
import { Button7 } from '#ui/button2/button7';
import { Button8 } from '#ui/button2/button8';
import { Button9 } from '#ui/button/button9';
import { Button10 } from '#ui/button2/button10';
import { Button11 } from '#ui/button/button11';

interface Props {
  handleSearch: (searchText: string) => void;
}

export const Header: React.FC<Props> = ({ handleSearch }) => {
  const name = 'Leus Eduard';
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [showNameAndLastName, setShowNameAndLastName] = useState(true);
  const savedName = name || '';

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

  const buttonfaUser = () => {
    navigate('/sing-in');
  };

  const buttonAddPost = () => {};

  const buttonHome = () => {
    navigate('/blog');
  };

  const buttonLogOut = () => {
    setShowNameAndLastName(false);
    setIsMenuOpen(false);
    navigate('/sing-in');
  };

  const buttonSingIn = () => {
    navigate('/sing-in');
  };

  const clearInput = () => {
    setInputValue('');
  };

  const handleSearchButtonClick = () => {
    console.log(inputValue);
    handleSearch(inputValue);
  };

  const handleMouseEnter = () => {
    if (!isMenuOpen) {
      setIsMouseOver(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMenuOpen && !inputValue) {
      setIsMouseOver(false);
    }
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
      <BlueRectangle
        className="blue-rectangle"
        onClick={handleMouseEnter}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isMouseOver ? (
          <SeachWrapper>
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
        ) : null}
      </BlueRectangle>
      <Button4 onClick={handleSearchButtonClick}>
        <FontAwesomeIcon icon={faSearch} />
      </Button4>
      {savedName ? (
        <Logo username={showNameAndLastName ? name : ''} />
      ) : (
        <Button7 onClick={buttonfaUser}>
          <FontAwesomeIcon icon={faUser} />
        </Button7>
      )}
      {showLogo && (
        <BurgerMenuWrapper>
          {savedName ? (
            <>
              <LogoWrapper>
                <Logo username={showNameAndLastName ? name : ''} />
                <Button9 onClick={buttonHome}>Home</Button9>
                <Button8 onClick={buttonAddPost}>Add post</Button8>
              </LogoWrapper>
              <ButtonWrapper>
                <Button10 onClick={buttonLogOut}>Log Out</Button10>
              </ButtonWrapper>
            </>
          ) : (
            <>
              <LogoWrapper>
                <Button9 onClick={buttonHome}>Home</Button9>
              </LogoWrapper>
              <ButtonWrapper>
                <Button11 onClick={buttonSingIn}>Sing In</Button11>
              </ButtonWrapper>
            </>
          )}
        </BurgerMenuWrapper>
      )}
    </HeaderWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: grid;
`;

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

const BurgerMenuWrapper = styled.div`
  background-color: white;
  height: 92.2vh;
  width: 236px;
  position: absolute;
  transform: translate3d(0px, 64px, 0px);
  display: grid;
  align-items: start;
  align-content: space-between;
  z-index: 1;
`;

const LogoWrapper = styled.div`
  display: grid;
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
      text-indent: 25px;
    }
  }
`;

const BlueRectangle = styled.div`
  width: -webkit-fill-available;
  height: 64.48px;
  background-color: blue;
`;

export default Header;
