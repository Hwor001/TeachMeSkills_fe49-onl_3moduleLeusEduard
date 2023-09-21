import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const Button3: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <ButtonWrapper type="button" disabled={disabled} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  all: unset;
  background-color: blue;
  cursor: pointer;
  padding: 5px 20px;
  color: var(--text-primary-color);
  border: 1px solid white;
  border-radius: 4px;
  color: white;
`;
