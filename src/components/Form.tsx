import React, { Component } from 'react';

interface IProps {
  name: string;
  age?: number;
}

// type IProps = {
//   name: string;
//   age?: number;
// }

interface IState {
  age: number;
  name: string;
}

class Form extends Component<{}, IState> {
  state = {
    name: '111',
    age: 11
  }

  render() {
    return (
      <div>
        { this.state.age }
      </div>
    );
  }
}

export default Form;
