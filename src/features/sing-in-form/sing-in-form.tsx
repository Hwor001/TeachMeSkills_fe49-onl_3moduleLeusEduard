import { Button } from '#ui/button';
import { Input } from '#ui/input/input';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setEmail, setPassword } from '../sing-up-form/sing-up-form.slice';

export const SingInForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const email = useAppSelector(({ signUpForm }) => signUpForm.email);
  const password = useAppSelector(({ signUpForm }) => signUpForm.password);

  const handleRegistration = () => {
    navigate('/success');
  };

  return (
    <RegistrationWrapper>
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
      <Button variant="primary" onClick={handleRegistration}>
        Sing in
      </Button>
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
  border: 1px solid var(--text-primary-color);
  padding: 40px;
`;
