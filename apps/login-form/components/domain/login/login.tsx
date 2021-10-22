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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    setError('');

    try {
      await login({ username, password });
      setIsLoggedIn(true);
    } catch (error) {
      setError('Incorrect username or password');
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1 className="m-12 text-4xl">Hello {username}</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="m-12 p-2 bg-red-600 text-white"
          >
            Log Out
          </button>
        </>
      ) : (
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
      )}
    </>
  );
}

export default Login;
