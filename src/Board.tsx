import * as React from 'react';
import Square from './Square';
export interface Props {
  value?: Array<number>;
}
class Board extends React.Component<Props, { squares?: Array<string>, xIsNext: Boolean }> {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  renderSquare(i: number) {
    return <Square value={this.state.squares![i]} onClick={() => this.handleClick(i)} />;
  }

  handleClick(i: number) {
    const squares = this.state.squares!.slice(); // copy array
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    this.setState({squares: squares});
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;