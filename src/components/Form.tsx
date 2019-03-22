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
  [key: string]: number | string;
}

class Form extends Component<{}, IState> {
  state = {
    name: '111',
    age: 11
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: { name: keyof IState, value: number | string } = e.currentTarget;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        { this.state.age }
        <input type="text" onChange={this.handleChange} name="name" value={ this.state.name } />
        <input type="text" onChange={this.handleChange} name="age" value={ this.state.age } />
      </div>
    );
  }
}

export default Form;
