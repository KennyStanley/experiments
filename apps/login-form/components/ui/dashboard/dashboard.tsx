import { useLoginContext } from '../../../contexts/loginContext';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const [state, dispatch] = useLoginContext();
  console.log(state);

  return (
    <>
      <h1 className="m-12 text-4xl">Hello {state.username}</h1>
      <button
        onClick={() => dispatch({ type: 'logout' })}
        className="m-12 p-2 bg-red-600 text-white"
      >
        Log Out
      </button>
    </>
  );
}

export default Dashboard;
