import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

enum Player {
  None = 0,
  One = 1,
  Two = 2
}

interface IState {
  board: Player[];
  nextPlayerTurn: Player
}

class App extends Component<{}, IState> {

  state = {
    board: [Player.None, 
            Player.None, 
            Player.None, 
            Player.None, 
            Player.None, 
            Player.None, 
            Player.None, 
            Player.None, 
            Player.None],
    nextPlayerTurn: Player.One
  }

  public handleCellClick = (index: number) => {
    const { board, nextPlayerTurn } = this.state;

    let newBoard = board.slice();

    newBoard[index] = nextPlayerTurn

    this.setState({
      board: newBoard,
      nextPlayerTurn: 3 - nextPlayerTurn
    })
  }

  public renderCell = (index: number) => {
    const { board } = this.state;
    return (
      <div className="cell" data-player={ board[index] } key={ index } onClick={ () => this.handleCellClick(index) }></div>
    )
  }

  public renderBoard = () => {
    const { board } = this.state;
    return (
      <div className="board-container">
        { board.map((value, key) => this.renderCell(key)) }
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
