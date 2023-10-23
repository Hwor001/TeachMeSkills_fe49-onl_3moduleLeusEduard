import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';
import styled from 'styled-components';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  error?: string;
};

export const Input = forwardRef(
  ({ labelText, error, ...restProps }: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Label>
        <LabelText>{labelText}</LabelText>
        <InputWrapper
          $borderColor={error ? 'red' : undefined}
          {...restProps}
          ref={ref as React.RefObject<HTMLInputElement>}
        />
        <Error>{error}</Error>
      </Label>
    );
  }
);

const Label = styled.label`
  display: block;
  width: fit-content;
  color: var(--text-primary-color);
`;

const LabelText = styled.div`
  text-align: start;
  position: relative;
  margin-bottom: 8px;
  left: 1px;
`;

const InputWrapper = styled.input<{ $borderColor?: string }>`
  all: unset;
  width: 544px;
  box-sizing: border-box;
  border: 1px solid var(--border-color);

  &:focus-visible {
    border: 1px solid ${({ $borderColor }) => $borderColor || '#CCCCCCCC'};
  }
`;

const Error = styled.div`
  height: 20px;
  color: red;
`;
