import { Button } from '#ui/button';
import { Input } from '#ui/input/input';
import { useState } from 'react';
import { Title } from '#ui/title/title';
import styled from 'styled-components';

export const SingInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState<string | null>(
    null
  );
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (email !== savedEmail || password !== savedPassword) {
      setRegistrationError('Name and password are not correct');
      setTimeout(() => {
        setRegistrationError(null);
      }, 2000);
      return;
    }

    setRegistrationError(null);

    setEmail('');
    setPassword('');

    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div>
        <Title>Success</Title>
        <Button variant="primary" onClick={() => setIsRegistered(false)}>
          Go home
        </Button>
      </div>
    );
  }

  return (
    <RegistrationWrapper>
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
      />
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <Button variant="primary" onClick={handleRegistration}>
        Sing in
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
