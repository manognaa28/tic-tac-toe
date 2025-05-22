import React from 'react';

function Square({ value, onClick, disabled }) {
  return (
    <button 
      className="square" 
      onClick={onClick} 
      disabled={disabled}
      aria-label={`Square ${value ? value : 'empty'}`}
    >
      {value}
    </button>
  );
}

export default Square;
