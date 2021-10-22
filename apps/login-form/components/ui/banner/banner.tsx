import './banner.module.css';

/* eslint-disable-next-line */
export interface BannerProps {
  username: string;
}

export function Banner(props: BannerProps) {
  return (
    <div>
      <h1 className="m-12 text-4xl">Hello {props.username}</h1>
    </div>
  );
}

export default Banner;
