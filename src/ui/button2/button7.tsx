import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const Button7: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <ButtonWrapper type="button" disabled={disabled} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  all: unset;
  padding: 11px 24px;
  background-color: blue;
  cursor: pointer;
  color: white;
`;