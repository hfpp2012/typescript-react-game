import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

  public renderCell = (index: number) => {
    return (
      <div className="cell"></div>
    )
  }

  public renderBoard = () => {
    return (
      <div className="board-container">
        { this.state.board.map((value, key) => this.renderCell(key)) }
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        { this.renderBoard() }
      </div>
    );
  }
}

export default App;
