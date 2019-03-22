import * as React from 'react';

interface IProps {
  name: string;
  age: number;
}

const Func: React.FunctionComponent<IProps> = ({ age, name }) => {
  const [myName, setMyName] = React.useState<string>(name);
  return (
    <div>{ age } { name }</div>
  )
}

export default Func;