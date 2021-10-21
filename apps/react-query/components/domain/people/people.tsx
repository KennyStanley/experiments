import { useQuery } from 'react-query';
import Person from '../../ui/person/person';

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/');
  return res.json();
};

/* eslint-disable-next-line */
export interface PeopleProps {}

export function People(props: PeopleProps) {
  const { data, status } = useQuery('people', fetchPeople);
  console.log(data);

  return (
    <div>
      <h1 className="text-2xl pb-2 font-bold font-heading">People</h1>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default People;
