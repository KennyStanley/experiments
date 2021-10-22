import { FormEvent, useState } from 'react';
import LoginForm from '../../ui/login-form/login-form';
import { login } from '@experiments/shared/utils';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await login({ username, password });
    } catch (error) {
      setError('Incorrect username or password');
    }

    setIsLoading(false);
  };

  return (
    <>
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        isLoading={isLoading}
        error={error}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Login;
