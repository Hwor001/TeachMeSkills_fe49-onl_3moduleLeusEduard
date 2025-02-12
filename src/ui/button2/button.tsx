import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <ButtonWrapper type="button" disabled={disabled} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

// const FontAwesomeIcon = styled.button`

// `

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  margin-left: 5px;
`;
