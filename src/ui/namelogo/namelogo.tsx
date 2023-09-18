import * as React from 'react';
import styled from 'styled-components';

interface Props {
  username: string;
}

export const NameLogo: React.FC<Props> = ({ username }) => {
  return <NameLogoWrapper>{username}</NameLogoWrapper>;
};

const NameLogoWrapper = styled.div`
  all: unset;
  padding: 10px;
  background-color: #3b3b89;
  margin-right: 20px;
`;

export default NameLogo;
