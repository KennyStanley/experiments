import { useReducer } from 'react';
import loginReducer, { initialState } from '../reducers/loginReducer';

export function useLoginState() {
  return useReducer(loginReducer, initialState);
}
