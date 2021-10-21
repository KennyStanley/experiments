/* eslint-disable-next-line */
export interface PersonProps {
  person: Record<string, unknown>;
}

export function Person(props: PersonProps) {
  return (
    <div className="bg-black p-4 rounded-3xl mx-8 my-4">
      <h3 className="text-xl text-yellow-300">{props.person.name}</h3>
      <p className="text-md text-gray-400">Gender - {props.person.gender}</p>
      <p className="text-md text-gray-400">
        Birth year - {props.person.birth_year}
      </p>
    </div>
  );
}

export default Person;
