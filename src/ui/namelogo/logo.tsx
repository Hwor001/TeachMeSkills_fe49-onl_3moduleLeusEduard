import styled from 'styled-components';
import { NameLogo } from './namelogo';
import { useAppSelector } from '../../hooks';

interface Props {
  username: string;
}

export const Logo: React.FC<Props> = ({ username }) => {
  const userInfo = useAppSelector((state) => state.user.name);
  const userName = userInfo.username;
  let initials = '';

  const words = userName.split(' ');

  if (words.length > 0) {
    initials += words[0].charAt(0);

    if (words.length > 1) {
      initials += words[1].charAt(0);
    }
  }
  return (
    <LogoWrapper>
      <NameLogo username={initials} />
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
