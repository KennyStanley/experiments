/* eslint-disable-next-line */
export interface LoadingStateProps {
  status: string;
}

export function LoadingState(props: LoadingStateProps) {
  return (
    <>
      {props.status === 'error' && <div>Error fetching data</div>}
      {props.status === 'loading' && <div>Loading data...</div>}
    </>
  );
}

export default LoadingState;
