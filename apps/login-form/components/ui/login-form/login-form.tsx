import { FormEvent } from 'react';
import './login-form.module.css';

/* eslint-disable-next-line */
export interface LoginFormProps {
  username: string;
  setUsername: any;
  password: string;
  setPassword: any;
  isLoading: boolean;
  setIsLoading: any;
  onSubmit: (e: FormEvent) => Promise<void>;
}

export function LoginForm(props: LoginFormProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-4 border-gray-600 rounded-xl">
        <form
          onSubmit={props.onSubmit}
          className="flex flex-col p-8 gap-4 min-w-25"
        >
          <p className="text-center text-2xl">Please Login!</p>
          <input
            type="text"
            placeholder="username"
            value={props.username}
            onChange={(e) => props.setUsername(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
            value={props.password}
            onChange={(e) => props.setPassword(e.currentTarget.value)}
          />
          <button
            type="submit"
            disabled={props.isLoading}
            className="p-2 bg-blue-700 hover:bg-blue-500 text-white"
          >
            {props.isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
