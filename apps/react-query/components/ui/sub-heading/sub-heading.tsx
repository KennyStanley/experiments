/* eslint-disable-next-line */
export interface SubHeadingProps {
  title: string;
}

export function SubHeading(props: SubHeadingProps) {
  return (
    <div>
      <h1 className="text-2xl pb-2 font-bold font-heading mt-8">
        {props.title}
      </h1>
    </div>
  );
}

export default SubHeading;
