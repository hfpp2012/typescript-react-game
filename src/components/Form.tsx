import React, { Component } from 'react';

interface IProps {
  name: string;
  age?: number;
}

// type IProps = {
//   name: string;
//   age?: number;
// }

class Form extends Component<IProps> {
  render() {
    return (
      <div>
        { this.props.name }
        { this.props.age }
      </div>
    );
  }
}

export default Form;
