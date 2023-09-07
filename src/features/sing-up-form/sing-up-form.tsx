import { Button } from '#ui/button';
import { Input } from '#ui/input/input';
import { useState } from 'react';
import { Title } from "#ui/title/title";


export const SingUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [registrationError, setRegistrationError] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleRegistration = () => {
    if (!name || !surname || !email || !password || !confirmedPassword) {
      setRegistrationError('All fields are required');
      setTimeout(() => {
        setRegistrationError(null); 
      }, 2000)
      return;
    }

    if (password !== confirmedPassword) {
      setRegistrationError('Passwords do not match');
      setTimeout(() => {
        setRegistrationError(null); 
      }, 2000)
      return;
    }

    setRegistrationError(null);

    setName('');
    setSurname('');
    setEmail('');
    setPassword('');
    setConfirmedPassword('');

    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div>
        <Title>Registration Confirmation</Title>
        <Button variant='primary' onClick={() => setIsRegistered(false)}>Go home</Button>
      </div>
    );
  }

  return (
    <form>
      <Input
        type="text"
        labelText="Name"
        value={name}
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
      <Input
        type="text"
        labelText="Surname"
        value={surname}
        onChange={({ currentTarget }) => setSurname(currentTarget.value)}
      />
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
      <Input
        type="password"
        labelText="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) => setConfirmedPassword(currentTarget.value)}
      />
      
      <Button variant='primary' onClick={handleRegistration}>Sing up</Button>
      {registrationError && <p>{registrationError}</p>}
    </form>
  );
};
