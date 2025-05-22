import React, { useState } from 'react';
import Square from './Square';

const winningCombinations = [
  [0, 1, 2], // horizontal top
  [3, 4, 5], // horizontal middle
  [6, 7, 8], // horizontal bottom
  [0, 3, 6], // vertical left
  [1, 4, 7], // vertical center
  [2, 5, 8], // vertical right
  [0, 4, 8], // diagonal left-to-right
  [2, 4, 6], // diagonal right-to-left
];

const strikeLineClasses = [
  'strike-horizontal-top',
  'strike-horizontal-middle',
  'strike-horizontal-bottom',
  'strike-vertical-left',
  'strike-vertical-center',
  'strike-vertical-right',
  'strike-diagonal-1',
  'strike-diagonal-2',
];

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squares) {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], lineIndex: i };
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const result = calculateWinner(squares);
  const winner = result ? result.winner : null;
  const winningLineIndex = result ? result.lineIndex : null;

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (!squares.includes(null)) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board" style={{ position: 'relative' }}>
        {squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            onClick={() => handleClick(i)}
            disabled={!!value || winner}
          />
        ))}

        {winner && (
          <div className={`strike-line ${strikeLineClasses[winningLineIndex]}`} />
        )}
      </div>
    </>
  );
}

export default Board;
