import { starWarsApiAdapter } from '@experiments/shared/utils';
import { useQuery } from 'react-query';
import LoadingState from '../../ui/loading-state/loading-state';
import Person from '../../ui/person/person';
import SubHeading from '../../ui/sub-heading/sub-heading';

/* eslint-disable-next-line */
export interface PeopleProps {}

export function People(props: PeopleProps) {
  const { data, status } = useQuery('people', starWarsApiAdapter.fetchPeople);
  console.log(data);

  return (
    <>
      <SubHeading title="People" />
      <LoadingState status={status} />
      {status === 'success' &&
        data.results.map((person) => (
          <Person person={person} key={person.name} />
        ))}
    </>
  );
}

export default People;
