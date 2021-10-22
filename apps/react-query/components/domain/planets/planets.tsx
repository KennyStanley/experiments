import { useQuery } from 'react-query';

import { starWarsApiAdapter } from '@experiments/shared/utils';

import LoadingState from '../../ui/loading-state/loading-state';
import Planet from '../../ui/planet/planet';
import SubHeading from '../../ui/sub-heading/sub-heading';

/* eslint-disable-next-line */
export interface PlanetsProps {}

export function Planets(props: PlanetsProps) {
  const { data, status } = useQuery('planets', starWarsApiAdapter.fetchPlanets);
  console.log(data);

  return (
    <div className="py-4">
      <SubHeading title="Planets" />
      <LoadingState status={status} />
      {status === 'success' &&
        data.results.map((planet) => (
          <Planet planet={planet} key={planet.name} />
        ))}
    </div>
  );
}

export default Planets;
