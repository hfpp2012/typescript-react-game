import * as React from 'react';

interface IProps {
  name: string;
  age: number;
}

const Func = ({ age }: IProps) => {
  // const [name, setName] = React.useState(props.name);
  return (
    <div>{ age }</div>
  )
}

export default Func;