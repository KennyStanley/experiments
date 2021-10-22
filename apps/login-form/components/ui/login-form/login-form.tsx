import { useLoginContext } from '../../../contexts/loginContext';
import { FormEvent } from 'react';
import './login-form.module.css';

/* eslint-disable-next-line */
export interface LoginFormProps {
  onSubmit: (e: FormEvent) => Promise<void>;
}

export function LoginForm(props: LoginFormProps) {
  const [state, dispatch] = useLoginContext();
  const { username, password, isLoading, error } = state;
  const onSubmit = props.onSubmit;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-4 border-gray-600 rounded-xl">
        <form onSubmit={onSubmit} className="flex flex-col p-8 gap-4 min-w-25">
          {error && <p className="text-center text-red-600">{error}</p>}
          <p className="text-center text-2xl">Please Login!</p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) =>
              dispatch({
                type: 'field',
                field: 'username',
                value: e.currentTarget.value,
              })
            }
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) =>
              dispatch({
                type: 'field',
                field: 'password',
                value: e.currentTarget.value,
              })
            }
          />
          <button
            type="submit"
            disabled={isLoading}
            className="p-2 bg-blue-700 hover:bg-blue-500 text-white"
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
