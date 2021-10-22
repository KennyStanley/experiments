import { FormEvent, useState, useReducer } from 'react';

import LoginForm from '../../ui/login-form/login-form';
import Dashboard from '../dashboard/dashboard';
import { useLoginState } from '../../../hooks/useLoginState';

import { login } from '@experiments/shared/utils';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [state, dispatch] = useLoginState();

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
          <Dashboard
            username={username}
            logout={() => dispatch({ type: 'logout' })}
          />
        </>
      ) : (
        <>
          <LoginForm state={state} dispatch={dispatch} onSubmit={onSubmit} />
        </>
      )}
    </>
  );
}

export default Login;
