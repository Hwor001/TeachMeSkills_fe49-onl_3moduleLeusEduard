import * as React from 'react';
import styled from 'styled-components';
import { NameLogo } from './namelogo';

interface Props {
   username: string;
};

export const Logo: React.FC<Props> = ({username}) => {
   return <LogoWrapper className="logo-content">
      <NameLogo username="AM" />
      {username}
      </LogoWrapper>;
};

const LogoWrapper = styled.div`
all: unset;
padding: 11px;
background-color: blue;
white-space: nowrap;
`;

export default Logo;