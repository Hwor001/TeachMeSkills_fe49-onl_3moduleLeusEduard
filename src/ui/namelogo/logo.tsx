import * as React from 'react';
import styled from 'styled-components';
import { NameLogo } from './namelogo';

interface Props {
  username: string;
}

export const Logo: React.FC<Props> = ({ username }) => {
  const savedName = localStorage.getItem('name') || '';

  const firstNameInitial = savedName.charAt(0).toUpperCase();

  return (
    <LogoWrapper>
      <NameLogo username={`${firstNameInitial}`} />
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
`;

export default Logo;
