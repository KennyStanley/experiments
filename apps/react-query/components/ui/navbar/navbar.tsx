/* eslint-disable-next-line */
export interface NavbarProps {
  setPage: (pageName: string) => void;
}

export function Navbar(props: NavbarProps) {
  return (
    <nav className="flex gap-3 justify-center m-2">
      <button
        onClick={() => props.setPage('planets')}
        className="max-w-md w-40 bg-gray-700 shadow-md rounded-lg px-2 py-1 hover:bg-gray-800 focus:ring-1 focus:ring-white"
      >
        Planets
      </button>
      <button
        onClick={() => props.setPage('people')}
        className="max-w-md w-40 bg-gray-700 shadow-md rounded-lg px-2 py-1 hover:bg-gray-800 focus:ring-1 focus:ring-white"
      >
        People
      </button>
    </nav>
  );
}

export default Navbar;
