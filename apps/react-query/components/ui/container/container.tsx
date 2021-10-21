/* eslint-disable-next-line */
export interface ContainerProps {
  children: any;
}

export function Container(props: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center">
      {props.children}
    </div>
  );
}

export default Container;
