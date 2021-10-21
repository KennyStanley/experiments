import Image from 'next/image';
import logo from '../../../public/logo.png';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className=" flex gap-10 items-center justify-center">
      <div className="w-28">
        <Image src={logo} alt="star wars logo" />
      </div>
      <h1 className="text-4xl py-4 font-heading text-yellow-400">
        React Query Example
      </h1>
    </header>
  );
}

export default Header;
