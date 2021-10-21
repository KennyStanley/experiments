import { useQuery } from 'react-query';
import Planet from '../../ui/planet/planet';

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets/');
  return res.json();
};

/* eslint-disable-next-line */
export interface PlanetsProps {}

export function Planets(props: PlanetsProps) {
  const { data, status } = useQuery('planets', fetchPlanets);
  console.log(data);

  return (
    <div>
      <h1 className="text-2xl pb-2 font-bold font-heading">Planets</h1>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet planet={planet} key={planet.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Planets;
