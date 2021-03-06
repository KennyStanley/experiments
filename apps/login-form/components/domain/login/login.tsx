import { FormEvent, useState, useReducer } from 'react';

import LoginForm from '../../ui/login-form/login-form';
import Dashboard from '../../ui/dashboard/dashboard';

import { login } from '@experiments/shared/utils';
import { useLoginContext } from '../../../contexts/loginContext';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [state, dispatch] = useLoginContext();
  const { username, password, isLoggedIn } = state;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'login' });
    try {
      await login({ username, password });
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Dashboard />
        </>
      ) : (
        <>
          <LoginForm onSubmit={onSubmit} />
        </>
      )}
    </>
  );
}

export default Login;
