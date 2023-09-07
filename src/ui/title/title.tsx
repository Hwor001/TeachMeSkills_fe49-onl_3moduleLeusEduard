import styled from 'styled-components';

type Props = {
  children: string;
}

export const Title: React.FC<Props> = ({ children }) => {
  return (
    <TitleWrapper>{children}</TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  height: 40px;
  color: var(--text-primary-color);
`