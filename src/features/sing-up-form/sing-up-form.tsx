import { Button } from '#ui/button';
import { Input } from '#ui/input/input';
import styled from 'styled-components';
import {
  setName,
  setEmail,
  setPassword,
  setConfirmedPassword,
} from './sing-up-form.slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../auth/registration.slice';

export const SingUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const name = useAppSelector(({ signUpForm }) => signUpForm.name);
  const email = useAppSelector(({ signUpForm }) => signUpForm.email);
  const password = useAppSelector(({ signUpForm }) => signUpForm.password);
  const confirmedPassword = useAppSelector(
    ({ signUpForm }) => signUpForm.confirmedPassword
  );
  const isCompleted = useAppSelector(
    ({ registration }) => registration.isCompleted
  );
  useEffect(() => {
    if (isCompleted) {
      navigate('/registration');
    }
  }, [isCompleted, navigate]);

  return (
    <RegistrationWrapper>
      <Input
        type="text"
        labelText="Name"
        value={name}
        onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
      />
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) =>
          dispatch(setEmail(currentTarget.value))
        }
        error={email ? undefined : `Email shoudn't be empty`}
      />
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) =>
          dispatch(setPassword(currentTarget.value))
        }
      />
      <Input
        type="password"
        labelText="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) =>
          dispatch(setConfirmedPassword(currentTarget.value))
        }
      />
      <Button
        variant="primary"
        onClick={() =>
          dispatch(
            register({
              username: name,
              password,
              email,
            })
          )
        }
      >
        Sign Up
      </Button>
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
  border: 1px solid var(--text-primary-color);
  padding: 40px;
`;
