/* eslint-disable-next-line */
export interface PlanetProps {
  planet: Record<string, unknown>;
}

export function Planet(props: PlanetProps) {
  return (
    <div className="bg-black p-4 rounded-3xl mx-8 my-4">
      <h3 className="text-xl text-yellow-300">{props.planet.name}</h3>
      <p className="text-md text-gray-400">
        Population - {props.planet.population}
      </p>
      <p className="text-md text-gray-400">Terrain - {props.planet.terrain}</p>
    </div>
  );
}

export default Planet;
