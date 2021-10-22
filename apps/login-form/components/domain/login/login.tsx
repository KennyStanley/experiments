import { FormEvent, useState, useReducer } from 'react';
import LoginForm from '../../ui/login-form/login-form';
import { login } from '@experiments/shared/utils';
import Dashboard from '../dashboard/dashboard';

function loginReducer(state, action) {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'login':
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case 'success':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        username: '',
        password: '',
        error: '',
      };
    case 'error':
      return {
        ...state,
        error: 'Incorrect username or password',
        isLoading: false,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: '',
      };
    default:
      return state;
  }
}

export const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [state, dispatch] = useReducer(loginReducer, initialState);

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
