import { Button } from '#ui/button';
import { Input } from '#ui/input/input';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { authorization } from '../auth/authorization.slice';
import { userInfo } from '../auth/user.slice';

export const SingInForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isCompleted = useAppSelector(
    (state) => state.authorization.isInCompleted
  );

  if (isCompleted) {
    return <Navigate to="/blog" />;
  }

  return (
    <RegistrationWrapper>
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={email ? undefined : `Email shoudn't be empty`}
      />
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <Button
        variant="primary"
        onClick={() => {
          dispatch(authorization({ email, password }));
          dispatch(userInfo({}));
        }}
      >
        Sing in
      </Button>
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
  border: 1px solid var(--text-primary-color);
  padding: 40px;
`;
