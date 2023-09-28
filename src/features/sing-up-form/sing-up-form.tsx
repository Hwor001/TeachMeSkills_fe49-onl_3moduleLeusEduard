import { Button } from '#ui/button';
import { Input } from '#ui/input/input';
import { useState } from 'react';
import { Title } from '#ui/title/title';
import styled from 'styled-components';
import { setName } from './sing-up-form-slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useRef } from 'react';

export const SingUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const lastnameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const confirmedPasswordInputRef = useRef<HTMLInputElement | null>(null);
  const name = useAppSelector(({ singUpForm }) => singUpForm.name);
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [registrationError, setRegistrationError] = useState<string | null>(
    null
  );
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    if (!name || !email || !password || !confirmedPassword) {
      setRegistrationError('All fields are required');
      setTimeout(() => {
        setRegistrationError(null);
      }, 2000);
      return;
    }

    if (password !== confirmedPassword) {
      setRegistrationError('Passwords do not match');
      setTimeout(() => {
        setRegistrationError(null);
      }, 2000);
      return;
    }

    setRegistrationError(null);

    localStorage.setItem('name', name);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setName('');
    setLastname('');
    setEmail('');
    setPassword('');
    setConfirmedPassword('');
    nameInputRef.current?.focus();
    // lastnameInputRef.current?.focus();
    // emailInputRef.current?.focus();
    // passwordInputRef.current?.focus();
    // confirmedPasswordInputRef.current?.focus();
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div>
        <Title>Registration Confirmation</Title>
        <Button variant="primary" onClick={() => setIsRegistered(false)}>
          Go home
        </Button>
      </div>
    );
  }

  return (
    <RegistrationWrapper>
      <Input
        type="text"
        labelText="Name"
        value={name}
        onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
        ref={nameInputRef}
      />
      <Input
        type="text"
        labelText="Last name"
        value={lastname}
        onChange={({ currentTarget }) => setLastname(currentTarget.value)}
        error={email ? undefined : `Last name is not required`}
        ref={lastnameInputRef}
      />
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={email ? undefined : `Email shoudn't be empty`}
        ref={emailInputRef}
      />
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
        ref={passwordInputRef}
      />
      <Input
        type="password"
        labelText="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) =>
          setConfirmedPassword(currentTarget.value)
        }
        ref={confirmedPasswordInputRef}
      />
      <Button variant="primary" onClick={handleRegistration}>
        Sing up
      </Button>
      {registrationError && <ErrorWrapper>{registrationError}</ErrorWrapper>}
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
  border: 1px solid var(--text-primary-color);
  padding: 40px;
`;

const ErrorWrapper = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 5px;
  width: 181px;
`;
