import styled from 'styled-components';
import { NameLogo } from './namelogo';

interface Props {
  username: string;
}

export const Logo: React.FC<Props> = ({ username }) => {
  const name = 'LE';
  return (
    <LogoWrapper>
      <NameLogo username={name} />
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
