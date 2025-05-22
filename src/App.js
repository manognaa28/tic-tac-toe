import React from 'react';
import Board from './components/Board';
import './styles.css';

function App() {
  return (
    <div className="app">
     <h1 style={{ textAlign: 'center' }}>Tic Tac Toe</h1>
  <Board />
    </div>
  );
}

export default App;
