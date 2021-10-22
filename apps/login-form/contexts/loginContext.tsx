import { createContext, useContext, useReducer } from 'react';
import loginReducer, { initialState } from '../reducers/loginReducer';

const LoginContext = createContext(undefined);

export function useLoginContext() {
  return useContext(LoginContext);
}

export function LoginProvider({ children }) {
  const value = useReducer(loginReducer, initialState);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
