import './logout-btn.module.css';

/* eslint-disable-next-line */
export interface LogoutBtnProps {
  setIsLoggedIn: (value: boolean) => void;
}

export function LogoutBtn(props: LogoutBtnProps) {
  return (
    <button
      onClick={() => props.setIsLoggedIn(false)}
      className="m-12 p-2 bg-red-600 text-white"
    >
      Log Out
    </button>
  );
}

export default LogoutBtn;
