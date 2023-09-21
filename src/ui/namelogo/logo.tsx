import styled from 'styled-components';
import { NameLogo } from './namelogo';

interface Props {
  username: string;
}

export const Logo: React.FC<Props> = ({ username }) => {
  const savedName = localStorage.getItem('name') || '';
  const savedLastName = localStorage.getItem('lastname') || '';

  const firstNameInitial = savedName.charAt(0).toUpperCase();
  const firstLastNameInitial = savedLastName.charAt(0).toUpperCase();
  return (
    <LogoWrapper>
      <NameLogo username={`${firstNameInitial}${firstLastNameInitial}`} />
      {username}
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  all: unset;
  padding: 11px;
  background-color: blue;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Logo;
